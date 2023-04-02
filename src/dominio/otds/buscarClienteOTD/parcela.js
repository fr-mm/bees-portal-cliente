class Parcela {
  numero;
  status;
  valor;
  dataDeVencimento;

  /**
   * @param {{
   * numero: string,
   * status: statusDeParcelaEnum,
   * valor: number,
   * dataDeVencimento: string
   * }}
   */
  constructor({ numero, status, valor, dataDeVencimento }) {
    this.numero = numero;
    this.status = status;
    this.valor = valor;
    this.dataDeVencimento = dataDeVencimento;
  }
}

export default Parcela;
