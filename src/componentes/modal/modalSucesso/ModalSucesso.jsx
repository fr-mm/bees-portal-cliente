import { AiOutlineCheckCircle } from "react-icons/ai";
import BlackButton from "../../blackButton/BlackButton";
import Modal from "../Modal";
import "./ModalSucesso.css";

export default function ModalSucesso(props) {
  return (
    <>
      <Modal>
        <div className="sucesso-container">
          <div className="sucesso-text-container">
            <AiOutlineCheckCircle className="sucesso checked green" />
            <h1 className="sucesso green">Seu novo contrato foi gerado!</h1>
            <p>
              Enviaremos uma cópia por e-mail e incluiremos as opções de
              pagamento.
            </p>
            <BlackButton width="5em" onClick={props.close}>
              Fechar
            </BlackButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
