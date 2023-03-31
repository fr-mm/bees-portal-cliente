class ParcelasDeContrato {
  todas;
  emAberto;
  emAtraso;
  pagas;

  /**
   * @param {{
   * todas: Parcela[],
   * emAberto: Parcela[],
   * emAtraso: Parcela[],
   * pagas: Parcela[],
   * }}
   */
  constructor({ todas, emAberto, emAtraso, pagas }) {
    this.todas = todas;
    this.emAberto = emAberto;
    this.emAtraso = emAtraso;
    this.pagas = pagas;
  }
}

module.exports = ParcelasDeContrato;
