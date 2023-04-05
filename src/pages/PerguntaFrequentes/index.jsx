import "./styles.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import {useState} from "react";

function PerguntasFrequentes() {
  const [textPerguntas, setTextPerguntas] = useState(true)


  function ButtonTitlePerguntas(current) {
    // if(current === 1) {
    //   textPerguntas === true? false : true
     
    //   setTextPerguntas(textPerguntas)
    // } 
    // console.log(textPerguntas)
  }
 
  return (
    <div className="container-perguntas">
    <Header/>
    <div className="scream-perguntas">
      <div className="container-video-perguntas">
        <div className="container-title-perguntas">
          <h1>Perguntas frequentes</h1>
          <img id="img-bees" src="" alt="bees"/>
        </div>
        <div className="box-video"></div> 
      </div>
      <div className="title-perguntas" onClick={() => {ButtonTitlePerguntas(1)}}>Onde posso pagar a fatura?</div>
      <div className="box-perguntas"   style={textPerguntas?  {display: "block"} : {display: "none"} }>Você pode pagar seu boleto através da Conta Digital Bees Bank ou em qualquer banco de sua preferência incluindo Lotéricas.

Em caso de dúvidas pode nos acionar via whatsapp 11 4949 8122 ou no 0800 768 3668.</div>
    </div>
    <Footer/>
    </div>
  )
}

export default PerguntasFrequentes;