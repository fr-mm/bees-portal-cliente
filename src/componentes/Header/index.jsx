import "./styles.css";
import {useNavigate} from "react-router-dom";

function Header() {
 const navigate = useNavigate();

  return (
    <div className="container-header">
        <img id="img-logo-bees" src="/img/beesLogo.svg" alt="logoBees"/>
        <div className="container-nav">
            <nav className="btn-header-inicio"  onClick={() => { navigate("/")}}>Inicio</nav>  
            <nav className="btn-header">Quais são os benefícios?</nav>
            <nav  className="btn-header" onClick={() => { navigate("/perguntasFrequentes")}}>Dúvidas frequentes</nav>
        </div>
        <img id="img-logo-salt" src="/img/logoSaltBlack.svg" alt="logoSalt"/>
    </div>
  );
}

export default Header;