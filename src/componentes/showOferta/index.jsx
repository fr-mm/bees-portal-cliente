import "./styles.css"
import document from "../../assets/document.svg"
import OfertaPagamentoParcelas from "./ofertaPagamentoParcelas";
import OfertaRenegociaDivida from "./ofertaRenegociacaoDivida";
import QuitarContrato from "./quitarContrato";
import React, { useState } from 'react';

function ShowOferta() {
    const [inputOption, setInputOption] = useState("1"); 

    const handleChangeInput = (event) => {
        setInputOption(event.target.value); 
      };
    

    return (
        <div className="oferta">
            <div className="container-alert">
                <p>Atenção: Não esqueça de pagar o(s) boleto(s) até a data de vencimento! Esse contrato será mantido somente se o pagamento for realizado dentro do prazo.</p>
            </div>
            <h1 className="titulo-nome-cliente">Boas vindas [User name]</h1>
            <div className="container-principal visualiza-oferta">

                <div className="showContrato">
                    <div className="container-icone flex-row"><img src={document} alt="" /> <h2>Detalhes do seu contrato</h2></div>
                    <div className="detalhes">
                        <div className="detalhes-numero-contrato linha flex-row space-between">
                            <h3 className="desc-oferta">Seu número de contrato</h3>
                            <h3 className="numero_contrato">6902452</h3>
                        </div>
                        <div className="detalhes-numero-contrato  flex-row space-between">
                            <h3 className="desc-oferta">Número de parcelas em atraso</h3>
                            <h3 className="numero_parcela_atraso">1Parcela</h3>
                        </div>
                    </div>
                    <div className="opcoes_pagamento">
                        <h1 className="titulo_opcoes_pagamento">Como você quer pagar suas parcelas?</h1>
                        <form className="botoes">
                        <label className="btn-trocar-tela">
                            <input type="radio" name="opcao" value="1" onChange={handleChangeInput}/> Pagamento das Parcelas
                        </label>
                        <label className="btn-trocar-tela">
                            <input type="radio" name="opcao" value="2" onChange={handleChangeInput}/> Renegociação seu contrato
                        </label>
                    </form>
                    
                </div>
            </div>
            {inputOption === "1"? <><OfertaPagamentoParcelas/> <QuitarContrato/></> : <OfertaRenegociaDivida />}
        </div>
       
        </div >
    );
}


export default ShowOferta;