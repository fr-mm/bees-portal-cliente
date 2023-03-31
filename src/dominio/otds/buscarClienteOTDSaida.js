class BuscarClienteOTDSaida {
  cliente;
  contratos;

  constructor({ cliente, contratos }) {
    this.cliente = cliente;
    this.contratos = contratos;
  }
}

module.exports = BuscarClienteOTDSaida;
