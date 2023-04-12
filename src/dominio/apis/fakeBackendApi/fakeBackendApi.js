import AbstractAPI from "../abstractApi";
import fakeBusucarContratos from "./fakeBuscarContratos";
import fakeSimularAcordo from "./fakeSimularAcordo";

class FakeResponse {
  status;
  data;
  constructor(data) {
    this.status = 200;
    this.data = data;
  }
}

export default class FakeBackendAPI extends AbstractAPI {
  async buscarContratos({ type, value }) {
    const contratos = fakeBusucarContratos();
    return new FakeResponse(contratos);
  }

  async simularAcordo(otdEntrada) {
    const simulacoes = fakeSimularAcordo(otdEntrada);
    return new FakeResponse(simulacoes);
  }
}
