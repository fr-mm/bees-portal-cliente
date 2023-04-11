import { statusDeParcelaEnum } from "../enums";
import { Parcela, Parcelas, ValorDeContrato } from "../otds/buscarClienteOTD";

const statusDeParcela = {
  PAGA: statusDeParcelaEnum.paga,
  "EM ABERTO": statusDeParcelaEnum.aVencer,
  VENCIDA: statusDeParcelaEnum.inadimplente,
  RENEGOCIADA: statusDeParcelaEnum.renegociada,
};

export default class ContratoSerializer {
  parse(contrato) {
    return {
      numero: contrato.contrato,
      parcelas: this.#parcelas(contrato),
      valor: this.#valor(contrato),
    };
  }

  #parcelas(contrato) {
    const aVencer = this.#parseParcelas(contrato.parcelas_a_vencer);
    const inadimplentes = this.#parseParcelas(contrato.parcelas_atrasadas);
    const pagas = this.#parseParcelas(contrato.parcelas_pagas);
    const renegociadas = this.#parseParcelas(contrato.parcelas_renegociadas);
    return new Parcelas({
      todas: aVencer.concat(inadimplentes).concat(pagas).concat(renegociadas),
      aVencer,
      inadimplentes,
      pagas,
      renegociadas,
    });
  }

  #valor(contrato) {
    return new ValorDeContrato({
      total: contrato.valor_emprestimo,
      inadimplentes: contrato.valor_total_atraso,
      aVencer: contrato.valor_total_negociavel,
    });
  }

  static #parseParcela(parcela) {
    return new Parcela({
      numero: parcela.valor_parcela,
      status: statusDeParcela[parcela.status_parcela] || "??",
      valor: parcela.valor_parcela_atualizado,
      dataDeVencimento: parcela.vencimento_original_parcela,
    });
  }

  #parseParcelas(parcelas) {
    return parcelas.map(ContratoSerializer.#parseParcela);
  }
}
