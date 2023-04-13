export default class SimularAcordoOTDEntrada {
  contrato;
  entrada;
  qtdParcelasPossiveis;

  /**
   * @param{{
   * contrato: string - número do contrato
   * entrada: number
   * qtdParcelasPossiveis: number[]
   * }}
   */
  constructor({ contrato, entrada, qtdParcelasPossiveis }) {
    this.contrato = contrato;
    this.entrada = entrada;
    this.qtdParcelasPossiveis = qtdParcelasPossiveis;
  }
}
