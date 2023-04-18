import "./styles.css";
import BlackButton from "../../blackButton/BlackButton";

export default function QuitarContrato() {
  return (
    <div className="container-pagar-acordo-inteiro">
      <div className="box-title-pagar-acordo">
        <h4>Quite seu contrato</h4>
      </div>
      <div className="box-infos-pagar-contrato-inteiro">
        <p>O valor para quitação do seu contrato é de:</p>
        <h4>R$ 364,49</h4>
      </div>
      <div className="box-btn-pagar-acordo-inteiro">
        <BlackButton>Gerar boleto para quitação</BlackButton>
      </div>
    </div>
  );
}
