export default class ValorDeContrato {
  total;
  emAtraso;
  emAberto;

  /**
   * @param {{
   * total: number,
   * inadimplentes: number,
   * aVencer: number
   * }}
   */
  constructor({ total, inadimplentes: emAtraso, aVencer: emAberto }) {
    this.total = total;
    this.emAtraso = emAtraso;
    this.emAberto = emAberto;
  }
}
