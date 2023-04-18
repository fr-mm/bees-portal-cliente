import TabelaParcelas from "./TabelOferta";
import "./styles.css";
import { format } from "../../../auxiliar";
import BlackButton from "../../blackButton/BlackButton";
import { useState } from "react";

function OfertaPagamentoParcelas(props) {
  const [parcelasSelecionadas, setParcelasSelecionadas] = useState([]);

  function selecionarParcela(parcela) {
    const atualizado = parcelasSelecionadas.concat([parcela]);
    setParcelasSelecionadas(atualizado);
  }

  function desselecionarParcela(parcela) {
    const atualizado = parcelasSelecionadas.filter(
      (item) => item.numero !== parcela.numero
    );
    setParcelasSelecionadas(atualizado);
  }

  function selecionarOuDesselecionarTodas() {
    if (
      parcelasSelecionadas.length ===
      props.contrato.parcelas.inadimplentes.length
    ) {
      setParcelasSelecionadas([]);
    } else {
      setParcelasSelecionadas(props.contrato.parcelas.inadimplentes);
    }
  }

  function somarValorParcelasSelecionadas() {
    const total = parcelasSelecionadas.reduce(
      (valor, parcela) => valor + parcela.valor,
      0
    );
    return format.money(total);
  }

  return (
    <div className="container_pagamento_parcelas">
      <p className="titulo_container">
        Deseja realizar o pagamento das parcelas vencidas?
      </p>
      <div className="container_lista">
        <div className="total_parcelas_atrasada">
          <p className="titulo__">O total das parcelas atrasadas é de:</p>
          <p className="valor_parcela">
            {format.money(props.contrato.valor.emAtraso)}
          </p>
        </div>
        <div className="tabela_div">
          <TabelaParcelas
            contrato={props.contrato}
            selecionarParcela={selecionarParcela}
            desselecionarParcela={desselecionarParcela}
            selecionarOuDesselecionarTodas={selecionarOuDesselecionarTodas}
            parcelasSelecionadas={parcelasSelecionadas}
          />
        </div>
        <div className="valor">
          <p className="titulo__">Pague o valor de</p>
          <p className="valor_parcela">{somarValorParcelasSelecionadas()}</p>
        </div>
        <div id="box-btn-gerar-acordo">
          <BlackButton onClick={() => {}}>
            Gerar acordo parcelas vencidas
          </BlackButton>
        </div>
      </div>
    </div>
  );
}
export default OfertaPagamentoParcelas;
