import "./styles.css";
import { AiFillCloseCircle } from "react-icons/ai";


function BuscaDocInvalida(props) {

  return (
    <div className="container-busca-invalida" >
        <div className="modal-busca-invalida">
            <div className="tile-busca-invalida"><h3>Número inválido</h3><div onClick={props.close}><AiFillCloseCircle id="img-close"/></div></div>
            <p>Confirme seu CPF/CNPJ ou o número do <br/>contrato e tente novamente</p>
            <div id="box-btn-busca-invalida"><button onClick={props.close}>Tentar novamente</button></div>
        </div>
    </div>
  );
}

export default BuscaDocInvalida;
