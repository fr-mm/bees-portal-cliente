class Entrada {
  min;
  max;
  escolhida;

  /**
   * @param {{
   * min: number,
   * max: number,
   * escolhida: number
   * }}
   */
  constructor({ min, max, escolhida }) {
    this.min = min;
    this.max = max;
    this.escolhida = escolhida;
  }
}

export default Entrada;
