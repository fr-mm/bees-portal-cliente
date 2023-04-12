import { SimulacaoDeAcordo } from "../otds/simularAcordoOTD";
import ValoresDeSimulacaoDeAcordo from "../otds/simularAcordoOTD/valorDeSimulacao";

export default class SimulacaoDeAcordoSerializer {
  parse(payload) {
    return new SimulacaoDeAcordo({
      id: payload.simulation_id,
      qtdParcelas: payload.installments_number,
      entrada: payload.down_payment_value,
      valor: new ValoresDeSimulacaoDeAcordo({
        total: payload.sum_installments_amount,
        daParcela: payload.installment_amount,
      }),
    });
  }
}
