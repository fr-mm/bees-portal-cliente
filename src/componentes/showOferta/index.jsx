import "./styles.css";
import React, { useEffect, useState } from "react";
import { useUser } from "../../hook";
import ContratoDisplay from "./ContratoDisplay";
import container from "../../dominio/container";
import { useNavigate } from "react-router-dom";
import { localStorageEnum } from "../../dominio/enums";
import ModalSimples from "../modal/modalSimples/ModalSimples";

function ShowOferta() {
  const navigate = useNavigate();
  const { buscaContext } = useUser();
  const [modalSimpesOpen, setModalSimplesOpen] = useState(true);
  const [searchResult, setSearchResult] = useState(buscaContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function update() {
      if (!searchResult) {
        const lastSearch = localStorage.getItem(localStorageEnum.lastSearch);
        const lastSearchType = localStorage.getItem(
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
      }
    }

    update();
  }, [navigate, searchResult]);

  if (loaded) {
    return (
      <>
        {modalSimpesOpen ? (
          <ModalSimples
            title="Gerar contrato?"
            text={
              <p>
                Seu novo contrato substituirá o contrato <br /> existente. Você
                receberá uma cópia por e-mail.
              </p>
            }
            buttonText={<div>Sim, gerar contrato.</div>}
            close={() => {
              setModalSimplesOpen(false);
            }}
            buttonOnclick={() => {
              setModalSimplesOpen(false);
            }}
          />
        ) : (
          <></>
        )}
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
    //faz um loader aqui
    return <></>;
  }
}

export default ShowOferta;
