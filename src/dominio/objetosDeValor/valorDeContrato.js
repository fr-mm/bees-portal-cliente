class ValorDeContrato {
  total;
  emAtraso;
  emAberto;

  /**
   * @param {{
   * total: number,
   * emAtraso: number,
   * emAberto: number
   * }}
   */
  constructor({ total, emAtraso, emAberto }) {
    this.total = total;
    this.emAtraso = emAtraso;
    this.emAberto = emAberto;
  }
}

module.exports = ValorDeContrato;
