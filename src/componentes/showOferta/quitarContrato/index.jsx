import "./styles.css";
import BlackButton from "../../blackButton/BlackButton";

export default function QuitarContrato() {
  return (
    <div className="container-pagar-acordo-inteiro">
      <div className="box-title-pagar-acordo">
        <h4>Pagar o contrato inteiro</h4>
      </div>
      <div className="box-infos-pagar-contrato-inteiro">
        <p>
          Pague todo o seu contrato sem a necessidade de parcelas pelo valor de
        </p>
        <h4>R$ 364,49</h4>
      </div>
      <div className="box-btn-pagar-acordo-inteiro">
        <BlackButton>Clique aqui para quitar</BlackButton>
      </div>
    </div>
  );
}
