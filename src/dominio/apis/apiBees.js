import axios from "axios";

export default class APIBees {
  #api;

  constructor() {
    this.#api = axios.create({
      baseURL: "https://beesbank.integrador.saltzap.com/webhook",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async buscarContrato({ type, value }) {
    return await this.#api.post(
      "/e75b4a0f-bbc7-4f07-b314-bbd7f47b21bd/44",
      JSON.stringify({ type, value })
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
