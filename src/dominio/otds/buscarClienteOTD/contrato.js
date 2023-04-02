class Contrato {
  numero;
  parcelas;
  valor;

  /**
   * @param {{
   * numero: string,
   * parcelas: Parcelas,
   * valor: ValorDeContrato
   * }}
   */
  constructor({ numero, parcelas, valor }) {
    this.numero = numero;
    this.parcelas = parcelas;
    this.valor = valor;
  }
}

export default Contrato;
