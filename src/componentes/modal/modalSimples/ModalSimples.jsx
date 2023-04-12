import { AiFillCloseCircle } from "react-icons/ai";
import BlackButton from "../../blackButton/BlackButton";
import Modal from "../Modal";
import "./ModalSimples.css";

function ModalSimples(props) {
  return (
    <Modal>
      <div className="modal-simples container">
        <div className="title-tel container-title">
          <h3>{props.title}</h3>
          <div onClick={props.close}>
            <AiFillCloseCircle id="img-close" />
          </div>
        </div>
        <p>{props.text}</p>

        <div id="box-btn-busca-invalida">
          <BlackButton onClick={props.buttonOnClick}>
            {props.buttonText}
          </BlackButton>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSimples;
