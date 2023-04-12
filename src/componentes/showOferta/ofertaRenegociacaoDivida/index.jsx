import "./styles.css";
import "./slider.css";
import React, { useState } from "react";
import ReactSlider from "react-slider";
import BlackButton from "../../blackButton/BlackButton";
import MoneyDisplay from "./moneyDisplay";
import { format } from "../../../auxiliar";

function OfertaRenegociaDivida() {
  const [entradaValue, setEntradaValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Em 2 vezes");
  const [changed, setChanged] = useState(true);

  function qtdParcelasOnChange(event) {
    setSelectedOption(event.target.value);
    setChanged(true);
  }

  function simularAcordo() {
    setChanged(false);
  }

  function sliderOnChange(value) {
    setEntradaValue(value);
    setChanged(true);
  }

  return (
    <div className="container_renegociar_divida">
      <div className="box-title-renegocia-divida">
        <h4>Defina em quantas parcelas você quer pagar a sua renegociação</h4>
      </div>

      <div className="box-input-e-label">
        <div className="box-label-input-range">
          <p>Entrada mínima</p>
          <p>Entrada máxima</p>
        </div>
        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          max={200}
          onChange={sliderOnChange}
          renderThumb={(props, state) => (
            <div {...props}>
              <div className="box-container">
                <div className="box">R$ {entradaValue}</div>
              </div>
            </div>
          )}
        />
      </div>
      <div className="box-infos-renegocia-divida">
        <div className="box-left-renegocia-divida">
          <p>Entrada</p>
          <MoneyDisplay active={true}>
            {format.money(entradaValue)}
          </MoneyDisplay>
        </div>
        <div className="box-right-renegocia-divida">
          <div className="box-input-parcelas-renegocia-divida">
            <p>Em quantas parcelas?</p>
            <select
              value={selectedOption}
              onChange={qtdParcelasOnChange}
              id="my-select-input"
            >
              <option value="2">Em 2 vezes</option>
              <option value="3">Em 3 vezes</option>
            </select>
          </div>
          <MoneyDisplay active={!changed}>R$ [Quantidy $$]</MoneyDisplay>
        </div>
      </div>
      {changed ? (
        <BlackButton onClick={simularAcordo}>Simular acordo</BlackButton>
      ) : (
        <BlackButton onClick={() => {}}>Gerar acordo</BlackButton>
      )}
    </div>
  );
}
export default OfertaRenegociaDivida;
