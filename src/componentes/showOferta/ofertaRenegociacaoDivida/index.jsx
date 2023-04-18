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
import { ModalSimples } from "../../modal";
import { GerarAcordoOTDEntrada } from "../../../dominio/otds";
import ModalTelefone from "../../modal/modalTelefoneEmail";
import TelaSucesso from "../../telaSucesso";

export default function OfertaRenegociaDivida(props) {
  const [qtdsDeParcelasPossiveis, setQtdsDeParcelasPossivels] = useState(
    container.calcular.qtdsDeParcelasPossiveis({
      valorTotal: props.contrato.valor.emAtraso,
      entrada: container.calcular.entradaMinima(props.contrato.valor.emAtraso),
    })
  );
  const [qtdParcelas, setQtdParcelas] = useState(qtdsDeParcelasPossiveis[0]);
  const [entradaValue, setEntradaValue] = useState(0);
  const [entradaMinima, setEntradaMinima] = useState(0);
  const [simulacoes, setSimulacoes] = useState();
  const [simulacao, setSimulacao] = useState();
  const [modalTelefone, setModalTelefone] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [modalGerarAcordoShowing, setModalGerarAcordoShowing] = useState(false);
  const [modalSucessoShowing, setModalSucessoShowing] = useState(false);
  const [errorModalShowing, setErrorModalShowing] = useState(false);

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

  async function gerarContrato() {
    const otd = new GerarAcordoOTDEntrada({
      simulacaoId: simulacao.id,
      qtdParcelas,
    });
    try {
      await container.casoDeUso.gerarAcordo.executar(otd);
      setModalGerarAcordoShowing(false);
      setModalSucessoShowing(true);
    } catch (erro) {
      setModalGerarAcordoShowing(false);
      setErrorModalShowing(true);
      throw erro;
    }
  }

  function sliderOnChange(value) {
    const novaQtdParcelasPossiveis = container.calcular.qtdsDeParcelasPossiveis(
      {
        valorTotal: props.contrato.valor.emAtraso,
        entrada: value,
      }
    );
    setQtdsDeParcelasPossivels(novaQtdParcelasPossiveis);
    setEntradaValue(value);
    setSimulacoes();
    setSimulacao();
  }

  const simularAcordo = useCallback(async () => {
    setFetching(true);
    const otdEntrada = new SimularAcordoOTDEntrada({
      contrato: props.contrato.numero,
      entrada: entradaValue,
      qtdParcelasPossiveis: qtdsDeParcelasPossiveis,
    });
    const otdSaida = await container.casoDeUso.simularAcordo.executar(
      otdEntrada
    );
    setFetching(false);
    setSimulacoes(otdSaida.simulacoes);
    setSimulacao(otdSaida.simulacoes[0]);
    const minima = container.calcular.entradaMinima(
      props.contrato.valor.emAtraso
    );
    setEntradaValue(minima);
    setEntradaMinima(minima);
  }, [entradaValue, props.contrato, qtdsDeParcelasPossiveis]);

  useEffect(() => {
    if (!loaded) {
      simularAcordo();
      setLoaded(true);
    }
  }, [loaded, simularAcordo]);

  function ErrorModal() {
    if (errorModalShowing) {
      return (
        <ModalSimples
          title="Algo deu errado..."
          text="Tente novamente mais tarde"
          buttonText="OK"
          close={() => setErrorModalShowing(false)}
          buttonOnClick={() => setErrorModalShowing(false)}
        />
      );
    } else {
      return <></>;
    }
  }

  function ModalGerarAcordo() {
    if (modalGerarAcordoShowing) {
      return (
        <ModalSimples
          title="Gerar contrato?"
          text={
            <p>
              Seu novo contrato substituirá o contrato <br /> existente. Você
              receberá uma cópia por e-mail.
            </p>
          }
          buttonText={<div>Sim, gerar contrato.</div>}
          close={() => {
            setModalGerarAcordoShowing(false);
          }}
          buttonOnClick={() => {
            gerarContrato();
          }}
        />
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      {modalSucessoShowing ? (
        <TelaSucesso
          close={() => {
            setModalSucessoShowing(false);
          }}
        />
      ) : (
        <></>
      )}
      <ErrorModal />
      <ModalGerarAcordo />
      {modalTelefone ? (
        <ModalTelefone
          close={() => {
            setModalTelefone(false);
          }}
          onClick={() => {
            setModalGerarAcordoShowing(true);
            setModalTelefone(false);
          }}
        />
      ) : (
        <></>
      )}
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
            min={entradaMinima}
            max={props.contrato.valor.emAtraso}
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
                {qtdsDeParcelasPossiveis.map((qtd) => (
                  <option value={qtd} key={qtd}>
                    Em {qtd} vezes
                  </option>
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
          <BlackButton onClick={() => setModalTelefone(true)}>
            Gerar acordo
          </BlackButton>
        ) : (
          <BlackButton onClick={simularAcordo}>Simular acordo</BlackButton>
        )}
      </div>
    </>
  );
}
