class BuscarClienteOTDSaida {
  cliente;
  contratos;

  /**
   * @param {{
   * cliente: Cliente,
   * contratos: Contrato[]
   * }}
   */
  constructor({ cliente, contratos }) {
    this.cliente = cliente;
    this.contratos = contratos;
  }
}

export default BuscarClienteOTDSaida;
