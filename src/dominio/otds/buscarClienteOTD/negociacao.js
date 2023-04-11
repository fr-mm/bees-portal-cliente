export default class Negociacao {
  parcelamento;
  entrada;

  /**
   * @param {{
   * parcelamento: Parcelamento,
   * entrada: Entrada
   * }}
   */
  constructor({ parcelamento, entrada }) {
    this.parcelamento = parcelamento;
    this.entrada = entrada;
  }
}
