class Contrato {
  numero;
  parcelas;
  valor;

  /**
   * @param {{
   * numero: string,
   * parcelas: ParcelasDeContrato,
   * valor: ValorDeContrato
   * }}
   */
  constructor({ numero, parcelas, valor }) {
    this.numero = numero;
    this.parcelas = parcelas;
    this.valor = valor;
  }
}

module.exports = Contrato;
