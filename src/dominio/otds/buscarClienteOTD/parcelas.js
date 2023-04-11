export default class Parcelas {
  todas;
  aVencer;
  inadimplentes;
  renegociadas;
  pagas;

  /**
   * @param {{
   * todas: Parcela[],
   * aVencer: Parcela[],
   * inadimplentes: Parcela[],
   * renegociadas: Parcela[],
   * pagas: Parcela[],
   *
   * }}
   */
  constructor({ todas, aVencer, inadimplentes, pagas, renegociadas }) {
    this.todas = todas;
    this.aVencer = aVencer;
    this.inadimplentes = inadimplentes;
    this.renegociadas = renegociadas;
    this.pagas = pagas;
  }
}
