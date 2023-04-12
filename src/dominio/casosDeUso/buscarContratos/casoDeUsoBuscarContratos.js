import { BuscaSemResutadoErro, PayloadInvalidoErro } from "../../erros";
import BuscarClienteOTDSaida from "../../otds/buscarClienteOTD/buscarClienteOTDSaida";

export default class CasoDeUsoBuscarContratos {
  #api;
  #contratoSerializer;
  #clienteSerializer;

  constructor({ api, contratoSerializer, clienteSerializer }) {
    this.#api = api;
    this.#contratoSerializer = contratoSerializer;
    this.#clienteSerializer = clienteSerializer;
  }

  /**
   * @param {object} otdEntrada BuscarClienteOTDEntrada
   * @returns {object} BuscarClienteOTDSaida
   */

  async executar(otdEntrada) {
    const response = await this.#api.buscarContratos(otdEntrada);
    if (response.status === 200) {
      return this.#serializeResponseData(response.data);
    } else if (response.status === 404) {
      throw new BuscaSemResutadoErro();
    } else if (response.status === 400) {
      throw new PayloadInvalidoErro();
    } else {
      throw new Error(`${response.status}: ${response.data}`);
    }
  }

  #serializeResponseData(data) {
    if (data.length > 0) {
      const cliente = this.#clienteSerializer.parse(data[0]);

      const contratoSerializer = this.#contratoSerializer;
      const contratos = data.map(contratoSerializer.parse);
      return new BuscarClienteOTDSaida({ cliente, contratos });
    } else {
      return [];
    }
  }
}
