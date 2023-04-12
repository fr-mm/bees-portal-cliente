import { MetodoAbstratoNaoImplemenetadoErro } from "../erros";

export default class AbstractAPI {
  constructor() {
    if (new.target === AbstractAPI) {
      throw new TypeError("Cannot construct AbstractClass instances directly");
    }
  }
  buscarContratos() {
    throw new MetodoAbstratoNaoImplemenetadoErro("buscarContratos");
  }
  simularAcordo() {
    throw new MetodoAbstratoNaoImplemenetadoErro("simularAcordo");
  }
}
