export default class SimulacaoDeAcordo {
  id;
  qtdParcelas;
  entrada;
  valor;

  /**
   * @param{{
   * id: string
   * qtdParcelas: number
   * entrada: number
   * valor: ValoresDeSimulacaoDeAcordo
   * }}
   */
  constructor({ id, qtdParcelas, entrada, valor }) {
    this.id = id;
    this.qtdParcelas = qtdParcelas;
    this.entrada = entrada;
    this.valor = valor;
  }
}
