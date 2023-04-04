import axios from "axios";
import { FalhaDeAutorizacaoErro } from "../erros";

export default class APIMova {
  #api;

  async autorizar() {
    const response = await this.#api.post(
      "/auth/credit-billing/token",
      JSON.stringify({
        grant_type: "client_credentials",
        client_id: "salt-system",
        client_secret: process.env.MOVA_CLIENT_SECRET,
      })
    );
    if (response.status === 200) {
      this.#api = await this.#criarAPI(response.data);
    } else if (response.status === 401) {
      throw new FalhaDeAutorizacaoErro();
    } else {
      throw new Error("Algo deu errado em APIMova.autorizar");
    }
  }

  async #criarAPI(token) {
    this.#api = axios.create({
      baseURL: "https://partners.hom.soudonus.com.br",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async buscarContrato(contratoId) {
    return await this.#api.post(
      "/credit-billing",
      JSON.stringify({ contract_external_id: contratoId })
    );
  }

  async simularAcordo({
    contratoId,
    dataDeVencimento,
    valorDeEntrada,
    quantidadesDeParcelas,
  }) {
    return await this.#api.post(
      "/simulation",
      JSON.stringify({
        reference_date: dataDeVencimento,
        down_payment_value: valorDeEntrada,
        contract_external_id: contratoId,
        collection_policy: {
          contract_interest_monthly_rate: 0.3,
          discount_percent_charges: 0.1,
          discount_percent_original: 0.3,
          additional_percent_after_charges: 0.3,
        },
        installments_number_options: quantidadesDeParcelas,
      })
    );
  }

  async fecharAcordo({ simulacaoId, quantidadeDeParcelas }) {
    return await this.#api.post({
      simulation_id: simulacaoId,
      installment_number_option: quantidadeDeParcelas,
    });
  }
}
