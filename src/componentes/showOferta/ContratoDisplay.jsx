import { useState } from "react";
import document from "../../assets/document.svg";
import OfertaPagamentoParcelas from "./ofertaPagamentoParcelas";
import OfertaRenegociaDivida from "./ofertaRenegociacaoDivida";
import QuitarContrato from "./quitarContrato";

export default function ContratoDisplay(props) {
  const [inputOption, setInputOption] = useState("1");

  const handleChangeInput = (event) => {
    setInputOption(event.target.value);
  };

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
          <form className="botoes">
            <label className="btn-trocar-tela">
              <input
                type="radio"
                name="opcao"
                value="1"
                onChange={handleChangeInput}
                defaultChecked={true}
              />{" "}
              Pagamento das Parcelas
            </label>
            <label className="btn-trocar-tela">
              <input
                type="radio"
                name="opcao"
                value="2"
                onChange={handleChangeInput}
              />{" "}
              Renegociação seu contrato
            </label>
          </form>
        </div>
      </div>
      {inputOption === "1" ? (
        <>
          <OfertaPagamentoParcelas contrato={props.contrato} />{" "}
          <QuitarContrato />
        </>
      ) : (
        <OfertaRenegociaDivida />
      )}
    </div>
  );
}
