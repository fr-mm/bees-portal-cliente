import { AiFillCloseCircle } from "react-icons/ai";
import BlackButton from "../../blackButton/BlackButton";
import Modal from "../Modal";
import "./ModalSimples.css";

function ModalSimples(props) {
  return (
    <Modal>
      <div className="modal-simples container">
        <div className="modal-simples title">
          <h1>{props.title}</h1>
          <AiFillCloseCircle
            className="modal-simples close"
            onClick={props.close}
          />
        </div>
        <div className="modal-simples text">{props.text}</div>
        <div className="modal-simples button">
          <BlackButton onClick={props.buttonOnClick}>
            {props.buttonText}
          </BlackButton>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSimples;
