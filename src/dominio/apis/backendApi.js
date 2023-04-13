import axios from "axios";
import AbstractAPI from "./abstractApi";

export default class BackendAPI extends AbstractAPI {
  #api;

  constructor() {
    super();
    this.#api = axios.create({
      baseURL:
        "https://beesbank.integrador.saltzap.com/webhook/da99f74f-b327-4629-b51f-c686890f0c30/40",
      timeout: 30000,
      headers: { "Content-Type": "application/json" },
    });
  }

  async buscarContratos({ valor, tipo }) {
    return await this.#api.post("", JSON.stringify({ valor, tipo }));
  }

  async simularAcordo() {}

  async gerarAcordo() {}
}
