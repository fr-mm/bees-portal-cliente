import "./styles.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BlackButton from "../blackButton/BlackButton";

function TelaSucesso(props) {
  return (
    <div className="sucesso center">
      <div className="sucesso message">
        <AiOutlineCheckCircle id="sucesso-checked" />
        <h1 className="sucesso green">Seu novo contrato foi gerado!</h1>
        <p>
          Enviaremos uma cópia por e-mail e incluiremos as opções de pagamento.
        </p>
        <BlackButton onClick={props.close}>Fechar</BlackButton>
      </div>
      <div className="sucesso bee">
        <img
          src="/img/mascotBees.svg"
          alt="mascote-bees"
          id="mascote-sucesso"
        />
      </div>

      <div className="bee" />
    </div>
  );
}

export default TelaSucesso;
