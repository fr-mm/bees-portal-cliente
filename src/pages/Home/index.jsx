import "./styles.css";
import Header from "../../componentes/Header";

import Footer from "../../componentes/Footer";


function Home() {
 
  return (
    <div className="container-home">
        <Header />
        <div className="scream-busca-cpf">
          <div className="container-title">  
            <h1>NEGOCIE AGORA</h1>
            <h3>Aproveite, é simples mantenha seu nome limpo.</h3>
          </div>
          <div className="container-busca-cpf">
            <h5>CONSULTE SUAS FATURAS EM ABERTO</h5>
            <p>Informe abaixo seu CPF/CNPJ ou número do contrato</p>
            <div className="container-radio-home">
              <div className="box-radio">
              <input type="radio"/>
              <label>CPF/CNPJ</label>
              </div>
              <div className="box-radio">
              <input type="radio"/>
              <label>Contrato</label>
              </div>
            </div>
            <div className="container-input-home">
            <input placeHolder="Escreva aqui seu CPF ou seu contrato..."/>
            <div className="box-lupa">
            <img id="lupa-icon" src="/img/lupaIconWhite.svg" alt="lupa-home"/>
            </div>
            </div>
          </div>
           
        </div>
        <Footer/>
    </div>
  );
}

export default Home;