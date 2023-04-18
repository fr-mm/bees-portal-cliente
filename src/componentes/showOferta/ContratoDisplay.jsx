import "./styles.css";
import { useState } from "react";
import document from "../../assets/document.svg";
import OfertaPagamentoParcelas from "./ofertaPagamentoParcelas";
import OfertaRenegociaDivida from "./ofertaRenegociacaoDivida";
import QuitarContrato from "./quitarContrato";
const abas = {
  pagamentoParcelas: "pagamentoParcelas",
  renegociacaoContrato: "renegociacaoContrato",
};

export default function ContratoDisplay(props) {
  const [inputOption, setInputOption] = useState(abas.pagamentoParcelas);

  function textoQuantidadeDeParcelas(parcelas) {
    const quantidade = parcelas.length;
    let texto = `${quantidade} Parcela`;
    return quantidade === 1 ? texto : texto + "s";
  }

  return (
    <div className="container-principal visualiza-oferta">
      <div className="showContrato">
        <div className="container-icone flex-row">
          <img src={document} alt="" /> <h2>Detalhes do seu contrato</h2>
        </div>
        <div className="detalhes">
          <div className="detalhes-numero-contrato linha flex-row space-between">
            <h3 className="desc-oferta">Seu número de contrato</h3>
            <h3 className="numero_contrato">{props.contrato.numero}</h3>
          </div>
          <div className="detalhes-numero-contrato  flex-row space-between">
            <h3 className="desc-oferta">Número de parcelas em atraso</h3>
            <h3 className="numero_parcela_atraso">
              {textoQuantidadeDeParcelas(props.contrato.parcelas.inadimplentes)}
            </h3>
          </div>
        </div>
        <div className="opcoes_pagamento">
          <h1 className="titulo_opcoes_pagamento">
            Como você quer pagar suas parcelas?
          </h1>
          <form id="botoes">
            <div
              onClick={() => {
                setInputOption(abas.pagamentoParcelas);
              }}
              className="box1"
            >
              <input
                type="radio"
                name="opcao"
                value={abas.pagamentoParcelas}
                id="radio1"
                onChange={() => {}}
                checked={inputOption === abas.pagamentoParcelas}
                htmlFor="radio1"
              />
              <label htmlFor="radio1">Pagamento das Parcelas</label>
            </div>
            <div
              onClick={() => {
                setInputOption(abas.renegociacaoContrato);
              }}
              className="box1"
            >
              <input
                type="radio"
                name="opcao"
                id="radio2"
                htmlFor="radio2"
                value={abas.renegociacaoContrato}
                onChange={() => {}}
                checked={inputOption === abas.renegociacaoContrato}
              />
              <label htmlFor="radio2">Renegociação do seu contrato</label>
            </div>
          </form>
        </div>
      </div>
      {inputOption === abas.pagamentoParcelas ? (
        <>
          <OfertaPagamentoParcelas contrato={props.contrato} />{" "}
          <QuitarContrato />
        </>
      ) : (
        <OfertaRenegociaDivida contrato={props.contrato} />
      )}
    </div>
  );
}
