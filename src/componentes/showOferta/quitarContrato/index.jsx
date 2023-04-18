import "./styles.css";
import BlackButton from "../../blackButton/BlackButton";
import { format } from "../../../auxiliar";

export default function QuitarContrato(props) {
  return (
    <div className="container-pagar-acordo-inteiro">
      <div className="box-title-pagar-acordo">
        <h4>Quite seu contrato</h4>
      </div>
      <div className="box-infos-pagar-contrato-inteiro">
        <p>O valor para quitação do seu contrato é de:</p>
        <h4>{format.money(props.contrato.valor.total)}</h4>
      </div>
      <div className="box-btn-pagar-acordo-inteiro">
        <BlackButton>Gerar boleto para quitação</BlackButton>
      </div>
    </div>
  );
}
