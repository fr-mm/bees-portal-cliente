class Parcelas {
  todas;
  aVencer;
  inadimplentes;
  pagas;

  /**
   * @param {{
   * todas: Parcela[],
   * aVencer: Parcela[],
   * inadimplentes: Parcela[],
   * pagas: Parcela[],
   * }}
   */
  constructor({ todas, aVencer, inadimplentes, pagas }) {
    this.todas = todas;
    this.aVencer = aVencer;
    this.inadimplentes = inadimplentes;
    this.pagas = pagas;
  }
}

export default Parcelas;
