import { BuscaSemResutadoErro, PayloadInvalidoErro } from "../../erros";

export default class BuscarClienteSaltMova {
  #apiSalt;
  #apiMova;

  constructor({ apiSalt, apiMova }) {
    this.#apiSalt = apiSalt;
    this.#apiMova = apiMova;
  }

  /**
   * @param {object} otdEntrada BuscarClienteOTDEntrada
   * @returns {object} BuscarClienteOTDSaida
   */
  async executar(otdEntrada) {
    const contratos = await this.#trazerContratos(otdEntrada);
    await this.#apiMova.autorizar();
  }

  async #trazerContratos(otdEntrada) {
    const saltResponse = await this.#apiSalt.post(otdEntrada);
    if (saltResponse.status === 404) {
      throw new BuscaSemResutadoErro();
    } else if (saltResponse.status === 400) {
      throw new PayloadInvalidoErro();
    } else {
      return saltResponse.data;
    }
  }
}
