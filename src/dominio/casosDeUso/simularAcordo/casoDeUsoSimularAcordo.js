import { BuscaSemResutadoErro, PayloadInvalidoErro } from "../../erros";
import { SimularAcordoOTDSaida } from "../../otds/simularAcordoOTD";

export default class CasoDeUsoSimularAcordo {
  #api;
  #simulacaoDeAcordoSerializer;

  constructor({ api, simulacaoDeAcordoSerializer }) {
    this.#api = api;
    this.#simulacaoDeAcordoSerializer = simulacaoDeAcordoSerializer;
  }

  async executar(otdEntrada) {
    const response = await this.#api.simularAcordo(otdEntrada);
    if (response.status === 200) {
      return new SimularAcordoOTDSaida({
        simulacoes: response.data.map(this.#simulacaoDeAcordoSerializer.parse),
      });
    } else if (response.status === 404) {
      throw new BuscaSemResutadoErro();
    } else if (response.status === 400) {
      throw new PayloadInvalidoErro();
    } else {
      throw new Error(`${response.status}: ${response.data}`);
    }
  }
}
