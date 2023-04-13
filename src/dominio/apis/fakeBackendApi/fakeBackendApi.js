import AbstractAPI from "../abstractApi";
import fakeBusucarContratos from "./fakeBuscarContratos";
import fakeSimularAcordo from "./fakeSimularAcordo";

const waitTime = 500;

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
    await this.#wait();
    const contratos = fakeBusucarContratos();
    return new FakeResponse(contratos);
  }

  async simularAcordo(otdEntrada) {
    await this.#wait();
    const simulacoes = fakeSimularAcordo(otdEntrada);
    return new FakeResponse(simulacoes);
  }

  async gerarAcordo(otdEntrada) {
    await this.#wait();
    return new FakeResponse({});
  }

  async #wait() {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }
}
