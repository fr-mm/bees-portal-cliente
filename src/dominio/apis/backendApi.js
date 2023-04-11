import axios from "axios";

export default class BackendAPI {
  #api;

  constructor() {
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
}
