import "./styles.css";
import "./slider.css";
import React, { useCallback, useEffect, useState } from "react";
import ReactSlider from "react-slider";
import BlackButton from "../../blackButton/BlackButton";
import MoneyDisplay from "./moneyDisplay";
import { format } from "../../../auxiliar";
import container from "../../../dominio/container";
import { SimularAcordoOTDEntrada } from "../../../dominio/otds/simularAcordoOTD";
import Loader from "../../Loader";

function OfertaRenegociaDivida(props) {
  const qtdParcelasPossiveis = getQtdParcelasPossiveis({ min: 2, max: 12 });
  const [entradaValue, setEntradaValue] = useState(0);
  const [qtdParcelas, setQtdParcelas] = useState(qtdParcelasPossiveis[0]);
  const [simulacoes, setSimulacoes] = useState();
  const [simulacao, setSimulacao] = useState();
  const [loaded, setLoaded] = useState(false);
  const [fetching, setFetching] = useState(false);

  function getQtdParcelasPossiveis({ min, max }) {
    const parcelasPossiveis = Array.from(
      { length: max - min + 1 },
      (_, i) => i + min
    );
    return parcelasPossiveis;
  }

  function qtdParcelasOnChange(event) {
    const novaQtd = parseInt(event.target.value);
    setQtdParcelas(novaQtd);
    if (simulacoes) {
      const simulacaoEscolhida = simulacoes.find(
        (simulac) => simulac.qtdParcelas === novaQtd
      );
      setSimulacao(simulacaoEscolhida);
    }
  }

  function sliderOnChange(value) {
    setEntradaValue(value);
    setSimulacoes();
    setSimulacao();
  }

  const simularAcordo = useCallback(async () => {
    setFetching(true);
    const otdEntrada = new SimularAcordoOTDEntrada({
      contrato: props.contrato.numero,
      entrada: entradaValue,
      qtdParcelasPossiveis,
    });
    const otdSaida = await container.casoDeUso.simularAcordo.executar(
      otdEntrada
    );
    setFetching(false);
    setSimulacoes(otdSaida.simulacoes);
    setSimulacao(otdSaida.simulacoes[0]);
  }, [entradaValue, props.contrato, qtdParcelasPossiveis]);

  useEffect(() => {
    if (!loaded) {
      simularAcordo();
      setLoaded(true);
    }
  }, [loaded, simularAcordo]);

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
        <div className="lower-box left">
          <div className="lower-box-title">
            <p>Entrada</p>
          </div>
          <div className="centered-money-display">
            <MoneyDisplay active={true}>
              {format.money(entradaValue)}
            </MoneyDisplay>
          </div>
        </div>
        <div className="lower-box">
          <div className="lower-box-title">
            <p>Em quantas parcelas?</p>
            <select
              value={qtdParcelas}
              onChange={qtdParcelasOnChange}
              className="parcelas-select"
            >
              {qtdParcelasPossiveis.map((qtd) => (
                <option value={qtd}>Em {qtd} vezes</option>
              ))}
            </select>
          </div>
          <div className="centered-money-display">
            {simulacao ? (
              <MoneyDisplay active={true}>
                {format.money(simulacao.valor.daParcela)}
              </MoneyDisplay>
            ) : fetching ? (
              <div className="money-display-loader-container">
                <Loader />
              </div>
            ) : (
              <MoneyDisplay active={false} />
            )}
          </div>
        </div>
      </div>
      {simulacao ? (
        <BlackButton onClick={() => {}}>Gerar acordo</BlackButton>
      ) : (
        <BlackButton onClick={simularAcordo}>Simular acordo</BlackButton>
      )}
    </div>
  );
}
export default OfertaRenegociaDivida;
