import "./styles.css";

function Header() {
 
  return (
    <div className="container-header">
        <img id="img-logo-bees" src="/img/beesLogo.svg" alt="logoBees"/>
        <div className="container-nav">
            <nav className="btn-header-inicio">Inicio</nav>  
            <nav className="btn-header">Quais são os benefícios?</nav>
            <nav  className="btn-header">Dúvidas frequentes</nav>
        </div>
        <img id="img-logo-salt" src="/img/logoSaltBlack.svg" alt="logoSalt"/>
    </div>
  );
}

export default Header;