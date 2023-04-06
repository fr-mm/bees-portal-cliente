import TabelaParcelas from "./TabelOferta"
import "./styles.css"
function OfertaPagamentoParcelas  (){
    return (
        <div className="container_pagamento_parcelas">
            <p className="titulo_container">
            Deseja realizar o pagamento das parcelas vencidas?
            </p>
            <div className="container_lista">
                <div className="total_parcelas_atrasada">
                <p className="titulo__">O total das parcelas atrasadas é de</p>
                <p className="valor_parcela">R$ 364,49</p>
                </div>
                <div className="tabela_div">
                <TabelaParcelas/>
                </div>
                <div className="valor">
                <p className="titulo__">Pague o valor de</p>
                <p className="valor_parcela">R$365,49</p>
                </div>
            </div>
        </div>
    )
};
export default OfertaPagamentoParcelas