import "./styles.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import ShowOferta from "../../componentes/showOferta";

function Oferta() {
 
  return (
    <div className="container">
        <Header />
        <ShowOferta/>
        <Footer/>
    </div>
  );
}

export default Oferta;