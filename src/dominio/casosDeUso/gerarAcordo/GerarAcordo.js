import { BuscaSemResutadoErro, PayloadInvalidoErro } from "../../erros";

export default class CasoDeUsoGerarAcordo {
  #api;

  constructor({ api }) {
    this.#api = api;
  }

  async executar(otdEntrada) {
    const response = await this.#api.gerarAcordo(otdEntrada);
    if (response.status === 200) {
      return;
    } else if (response.status === 404) {
      throw new BuscaSemResutadoErro();
    } else if (response.status === 400) {
      throw new PayloadInvalidoErro();
    } else {
      throw new Error(`${response.status}: ${response.data}`);
    }
  }
}
