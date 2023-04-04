import "./styles.css"
import document from "../../assets/document.svg"
function ShowOferta() {

    return (
        <div className="container-oferta">

            <div className="container-alert">
                <p>Atenção: Não esqueça de pagar o(s) boleto(s) até a data de vencimento! Esse contrato será mantido somente se o pagamento for realizado dentro do prazo.</p>
            </div>
            <div className="container-principal visualiza-oferta">
                <h1 className="titulo-nome-cliente">Boas vindas [User name]</h1>
                <div className="showContrato">
                    <img src={document} alt="" />
                </div>
            </div>

        </div>
    );
}


export default ShowOferta;