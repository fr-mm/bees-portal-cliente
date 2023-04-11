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
      parcelas: ContratoSerializer.#parcelas(contrato),
      valor: ContratoSerializer.#valor(contrato),
    };
  }

  static #sortAll(...gruposDeParcelas) {
    gruposDeParcelas.map((parcelas) =>
      parcelas.sort((a, b) => (a.numero > b.numero ? 1 : -1))
    );
  }

  static #parcelas(contrato) {
    const aVencer = ContratoSerializer.#parseParcelas(
      contrato.parcelas_a_vencer
    );
    const inadimplentes = ContratoSerializer.#parseParcelas(
      contrato.parcelas_atrasadas
    );
    const pagas = ContratoSerializer.#parseParcelas(contrato.parcelas_pagas);
    const renegociadas = ContratoSerializer.#parseParcelas(
      contrato.parcelas_renegociadas
    );
    const todas = pagas
      .concat(aVencer)
      .concat(inadimplentes)
      .concat(renegociadas);
    ContratoSerializer.#sortAll(
      aVencer,
      inadimplentes,
      pagas,
      renegociadas,
      todas
    );

    return new Parcelas({
      todas,
      aVencer,
      inadimplentes,
      pagas,
      renegociadas,
    });
  }

  static #valor(contrato) {
    return new ValorDeContrato({
      total: contrato.valor_emprestimo,
      inadimplentes: contrato.valor_total_atraso,
      aVencer: contrato.valor_total_negociavel,
    });
  }

  static #parseParcela(parcela) {
    return new Parcela({
      numero: parcela.numero_parcela,
      status: statusDeParcela[parcela.status_parcela] || "??",
      valor: parcela.valor_parcela_atualizado,
      dataDeVencimento: parcela.vencimento_original_parcela,
    });
  }

  static #parseParcelas(parcelas) {
    return parcelas.map(ContratoSerializer.#parseParcela);
  }
}
