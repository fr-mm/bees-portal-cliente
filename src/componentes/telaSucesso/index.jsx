import "./styles.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BlackButton from "../blackButton/BlackButton";

function TelaSucesso() {
  return (
    <div className="container-sucesso">
      <div className="container-tile container-img">
        <div className="box-tilte-sucesso">
          <AiOutlineCheckCircle id="check-sucesso" />
          <h2>Seu novo contrato foi gerado!</h2>
        </div>
        <div className="box-mascote-sucesso">
          <img
            src="/img/mascotBees.svg"
            alt="mascote-bees"
            id="mascote-sucesso"
          />
        </div>
      </div>
      <div className="box-text-sucesso">
        <p>
          Enviaremos uma cópia por e-mail e incluiremos as opções de pagamento.
        </p>
        <div className="btn-tela-sucesso">
          <BlackButton onClick={() => {}}>Fechar</BlackButton>
        </div>
      </div>
    </div>
  );
}

export default TelaSucesso;
