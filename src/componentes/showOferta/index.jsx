import "./styles.css";
import React, { useEffect, useState } from "react";
import { useUser } from "../../hook";
import ContratoDisplay from "./ContratoDisplay";
import container from "../../dominio/container";
import { useNavigate } from "react-router-dom";
import { localStorageEnum } from "../../dominio/enums";
import ProcessamentoReq from "../ProcessamentoReq";

export default function ShowOferta() {
  const navigate = useNavigate();
  const { buscaContext } = useUser();
  const [searchResult, setSearchResult] = useState(buscaContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function update() {
      if (!searchResult) {
        const lastSearch = sessionStorage.getItem(localStorageEnum.lastSearch);
        const lastSearchType = sessionStorage.getItem(
          localStorageEnum.lastSearchType
        );
        if (lastSearch && lastSearchType) {
          setSearchResult(await doSearch(lastSearch, lastSearchType));
        } else {
          navigate("/");
        }
      }
      setLoaded(true);
    }

    async function doSearch(search, searchType) {
      try {
        const otd = await container.casoDeUso.buscarContratos.executar({
          valor: search,
          tipo: searchType,
        });

        if (otd.contratos.length === 0) {
          // O que acntece se não tiver contratos
          console.log("cliente não tem contratos");
          navigate("/");
        }

        // muda de rota e passa os contratos pra nova rota
        localStorage.setItem(localStorageEnum.lastSearch, search);
        localStorage.setItem(localStorageEnum.lastSearchType, searchType);
        return otd;
      } catch (error) {
        // O que acontece se der erro de comunicação com backend
        throw error;
      } finally {
      }
    }

    update();
  }, [navigate, searchResult]);

  if (loaded) {
    return (
      <>
        <div className="oferta">
          <div className="container-alert">
            <p>
              Atenção: Não esqueça de pagar o(s) boleto(s) até a data de
              vencimento! Esse contrato será mantido somente se o pagamento for
              realizado dentro do prazo.
            </p>
          </div>
          <h1 className="titulo-nome-cliente">
            Boas vindas {searchResult.cliente.nome}
          </h1>
          {searchResult.contratos.map((contrato) => (
            <ContratoDisplay key={contrato.numero} contrato={contrato} />
          ))}
        </div>
      </>
    );
  } else {
    return <ProcessamentoReq />;
  }
}
