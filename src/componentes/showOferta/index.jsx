import "./styles.css";
import React from "react";
import { useUser } from "../../hook";
import ContratoDisplay from "./ContratoDisplay";

function ShowOferta() {
  const { resultadoDeBusca } = useUser();

  return (
    <div className="oferta">
      <div className="container-alert">
        <p>
          Atenção: Não esqueça de pagar o(s) boleto(s) até a data de vencimento!
          Esse contrato será mantido somente se o pagamento for realizado dentro
          do prazo.
        </p>
      </div>
      <h1 className="titulo-nome-cliente">
        Boas vindas {resultadoDeBusca.cliente.nome}
      </h1>
      {resultadoDeBusca.contratos.map((contrato) => (
        <ContratoDisplay key={contrato.numero} contrato={contrato} />
      ))}
    </div>
  );
}

export default ShowOferta;

