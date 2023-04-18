import { faker } from "@faker-js/faker";

export default function fakeSimularAcordo(otdEntrada) {
  const simulacoes = [];
  for (let qtdParcelas of otdEntrada.qtdParcelasPossiveis) {
    const simulacao = criarFakeSimulacao({
      entrada: otdEntrada.entrada,
      qtdParcelas,
    });
    simulacoes.push(simulacao);
  }
  return simulacoes;
}

export function criarFakeSimulacao({ entrada, qtdParcelas }) {
  const valorTotal = faker.datatype.number({ min: 1000, max: 999999 });
  return {
    installments_number: qtdParcelas,
    down_payment_value: entrada,
    installment_amount: valorTotal / qtdParcelas,
    sum_installments_amount: valorTotal,
    simulation_id: faker.datatype.uuid(),
  };
}
