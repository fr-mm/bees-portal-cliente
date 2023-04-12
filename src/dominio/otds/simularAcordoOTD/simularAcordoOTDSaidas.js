export default class SimularAcordoOTDSaida {
  simulacoes;

  /**
   * @param{{
   * simulacoes: SimulacaoDeAcordo[]
   * }}
   */
  constructor({ simulacoes }) {
    this.simulacoes = simulacoes;
  }
}
