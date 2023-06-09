import { AiFillCloseCircle } from "react-icons/ai";
import BlackButton from "../../blackButton/BlackButton";
import Modal from "../Modal";
import "./styles.css";

function ModalTelefone(props) {
  return (
    <Modal>
      <div className="container-modal-infos-telefone">
        <div className="box-title modal-infos-pessoal">
          <h1>
            Seu novo contrato foi <br /> gerado!
          </h1>
          <AiFillCloseCircle
            className="modal-tile-telefone close"
            onClick={props.close}
          />
        </div>
        <div className="box-text modal-infos-text">
          <p>
            Confirme o número do seu WhatsApp ou <br />
            endereço de e-mail para receber uma cópia do <br />
            contrato.
          </p>
        </div>
        <form id="formulario-telefone">
          <label for="cellphone">Número do WhatsApp</label>
          <input
            htmlFor="cellphone"
            type="tel"
            id="cellphone"
            name="cellphone"
            key="inputCeelphone"
          />

          <label for="email">E-mail</label>
          <input
            htmlFor="email"
            type="email"
            id="email"
            name="email"
            key="inputEmail"
          />

          <div id="box-btn-submit-telefone">
            <BlackButton onClick={props.onClick}>Confirmar</BlackButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalTelefone;
