import "./styles.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BlackButton from "../blackButton/BlackButton";

function TelaSucesso() {
  return (
    <div className="sucesso center">
      <div className="sucesso message">
        <AiOutlineCheckCircle className="sucesso checked green" />
        <h1 className="sucesso green">Seu novo contrato foi gerado!</h1>
        <p>
          Enviaremos uma cópia por e-mail e incluiremos as opções de pagamento.
        </p>
        <BlackButton width="5em" onClick={() => {}}>
          Fechar
        </BlackButton>
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
