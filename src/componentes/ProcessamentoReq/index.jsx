import "./styles.css";
import Loader from "../Loader";

function ProcessamentoReq() {
  return (
    <div className="container-req">
      <div className="box-carregamento">
        <div className="box-loader-img">
          <img src="/img/mascotBees.svg" alt="logo-carregamento" />
          <Loader />
        </div>
        <h1>
          Aguarde um momento enquanto <br />
          procuramos suas informações.
        </h1>
      </div>
    </div>
  );
}

export default ProcessamentoReq;

