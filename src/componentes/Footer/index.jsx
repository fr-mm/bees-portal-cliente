import "./styles.css";
import LogoAmarelo from "../../assets/LogoAmarelo.svg"
function Footer() {

    return (
        <div className="container-footer">
            <div className="retangle-infos">
                <div className="squad-info primeiro">
                    <img src={LogoAmarelo} alt="" className="logo-bees-amarelo" />
                    <h2 className="paragrafo-squad-1">
                        Helping you thrive.
                    </h2>
                </div>
                <div className="squad-info segundo">
                    <h1 className="titulo-squad">
                        Serviços
                    </h1>
                    <p className="paragrafo-squad">
                        Dúvidas frequentes
                    </p>
                    <p className="paragrafo-squad">
                        Política de Privacidade
                    </p>
                    <p className="paragrafo-squad">
                        Termos e Condições
                    </p>
                </div>
                <div className="squad-info terceiro">
                    <h1 className="titulo-squad">
                        Dúvidas
                    </h1>
                    
                    <p className="paragrafo-squad">
                        Ligue para Central de Atendimento Parceiro
                        BEES Tel: 0800-887-1111
                    </p>
                </div>
                <div className="squad-info quarto">
                    <h1 className="titulo-squad">
                        Horário de funcionamento
                    </h1>
                    <p className="paragrafo-squad">
                        Segunda a sábado das 8h às 20h
                    </p>
                </div>
            </div>
            <div className="retangule-info-direitos">
                <p>© PARCEIRO BEES 2023. TODOS OS DIREITOS RESERVADOS</p>
                <p>- BEBA COM MODERAÇÃO. VENDA PROIBIDA PARA MENORES DE 18 ANOS. -</p>
            </div>
        </div>
    );
}

export default Footer;