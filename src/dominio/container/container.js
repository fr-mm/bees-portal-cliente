import BuscarClienteMock from "../casosDeUso/buscarCliente/buscarCienteMock";

class Container {
  buscarCliente;

  constructor() {
    this.buscarCliente = new BuscarClienteMock();
  }
}

const container = new Container();

export default container;
