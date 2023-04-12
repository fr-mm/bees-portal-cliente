export default class ValoresDeSimulacaoDeAcordo {
  total;
  daParcela;

  /**
   * @param{{
   * total: number
   * daParcela: number
   * }}
   */
  constructor({ total, daParcela }) {
    this.total = total;
    this.daParcela = daParcela;
  }
}
