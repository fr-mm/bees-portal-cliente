import TabelaParcelas from "./TabelOferta";
import "./styles.css";
import { format } from "../../../auxiliar";
import BlackButton from "../../blackButton/BlackButton";

function OfertaPagamentoParcelas(props) {
  return (
    <div className="container_pagamento_parcelas">
      <p className="titulo_container">
        Deseja realizar o pagamento das parcelas vencidas?
      </p>
      <div className="container_lista">
        <div className="total_parcelas_atrasada">
          <p className="titulo__">O total das parcelas atrasadas é de</p>
          <p className="valor_parcela">
            {format.money(props.contrato.valor.emAtraso)}
          </p>
        </div>
        <div className="tabela_div">
          <TabelaParcelas contrato={props.contrato} />
        </div>
        <div className="valor">
          <p className="titulo__">Pague o valor de</p>
          <p className="valor_parcela">TBD</p>
        </div>
        <div id="box-btn-gerar-acordo">
          <BlackButton onClick={() => {}}>
            Gerar acordo parcelas vencidas
          </BlackButton>
        </div>
      </div>
    </div>
  );
}
export default OfertaPagamentoParcelas;
