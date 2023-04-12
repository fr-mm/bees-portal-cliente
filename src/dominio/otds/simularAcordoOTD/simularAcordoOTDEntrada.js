export default class SimularAcordoOTDEntrada {
  acordo;
  entrada;

  /**
   * @param{{
   * acordo: string - número do acordo
   * entrada: number
   * }}
   */
  constructor({ acordo, entrada }) {
    this.acordo = acordo;
    this.entrada = entrada;
  }
}
