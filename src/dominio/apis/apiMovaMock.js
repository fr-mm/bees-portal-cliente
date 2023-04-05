function mockResponse(data) {
  return {
    status: 200,
    data,
  };
}

export class APIMovaMock {
  getToken() {
    return mockResponse({
      acess_token: "fake-access-token",
      expires_in: 300,
      refresh_expires_in: 0,
      token_type: "Bearer",
      "not-before-policy": 0,
      scope: "email profile",
    });
  }

  installments(contratoId) {
    return mockResponse({
      document: contratoId,
      name: "Maria Joaquina",
      status: "OPEN",
      ccb_number: "2131212411",
      total_overdue_value: 123.45,
      total_debt_value: 123.45,
      total_negociable_value: 123.45,
      total_paid_installments: 5,
      total_due_installments: 5,
      total_overdue_installments: 5,
      total_late_fine: 123.45,
      total_interest_value: 123.45,
      total_discount_pre_payment: 123.45,
      max_late_days: 4,
      installments: this.#criarParcelasDeContrato(4),
    });
  }

  #criarParcelasDeContrato(quantidade) {
    const parcelas = [];
    for (let i = 1; i <= quantidade; i++) {
      const parcela = {
        principal_value: 123.45,
        updated_value: 123.45,
        late_fine: 123.45,
        interest_value: 123.45,
        discount_pre_payment: 123.45,
        late_days: 7,
        original_due_date: "2001-05-31",
        number: 1,
        status: "PAID",
      };
      parcelas.push(parcela);
    }
    return parcelas;
  }

  simulation({
    reference_date,
    down_payment_value,
    contract_external_id,
    collection_policy = {
      contract_interest_monthly_rate: 0.3,
      discount_percent_charges: 0.1,
      discount_percent_original: 0.3,
      additional_percent_after_charges: 0.3,
    },
    installments_number_options,
  }) {
    return mockResponse(this.#criarSimulacoes(installments_number_options));
  }

  #criarSimulacoes(quantidadeDeParcelas) {
    const simulacoes = [];
    let id = 0;
    for (let quantidade of quantidadeDeParcelas) {
      id++;
      const simulacao = {
        id: `fake-id-${id}`,
        installments_number: quantidade,
        down_payment_value: 1200.54,
        installment_amount: 200,
        sum_installments_amount: 1000,
      };
      simulacoes.push(simulacao);
    }
    return simulacoes;
  }

  agreement({ simulation_id, installment_number_option }) {
    return mockResponse([
      {
        total_installments_number: installment_number_option,
        sum_installments_principal_value: 1200.54,
        sum_installments_amount: 500,
        down_payment_value: 1200.54,
        sum_installments_interest_amount: 1000,
        installments: this.#criarParcelasDeAcordo(installment_number_option),
        down_payment_info: {
          bar_code: "23793.38128 60005.706373 03000.050801 7 90770000168088",
          bar_code_url:
            "https://faturas.iugu.com/ee81ec24-351a-407a-9cf7-11985609ee76-3b9d",
          pix_code: "00020101021226880014br.gov.bcb.pixXXX",
          pix_qrcode_url: "https://faturas.iugu.com/ee81ec24XXX",
        },
      },
    ]);
  }

  #criarParcelasDeAcordo(quantidade) {
    const parcelas = [];
    for (let i = 1; i <= quantidade; i++) {
      const parcela = {
        installment_number: i,
        installment_amount_value: 1200.54,
        installment_interest_amount: 200.54,
        installment_principal_value: 200.54,
        installment_due_date: "2023-01-25",
      };
      parcelas.push(parcela);
    }
    return parcelas;
  }
}
