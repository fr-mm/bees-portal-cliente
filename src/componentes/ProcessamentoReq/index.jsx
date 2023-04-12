import "./styles.css";


function ProcessamentoReq() {

  return (
    <div className="container-req">
        <div className="box-carregamento">
            <img src="/img/mascotBees.svg" alt="logo-carregamento"/>
            <div class="loader">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="dot dot-3"></div>
            </div>
            <h1>Aguarde um momento enquanto <br/>
                procuramos suas informações.
            </h1>
        </div>
    </div>
  );
}

export default ProcessamentoReq;