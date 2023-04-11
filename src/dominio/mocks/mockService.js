export default class MockService {
  static #ANY = "%$#@%$@#$% ANY VALUE @#$%@%@$%#%";
  #entradaEsperada;
  #retorno;

  constructor({ entradaEsperada, retorno }) {
    if (!entradaEsperada || !retorno) {
      throw new Error(
        `ERRO: new MockService({entradaEsperada: ${entradaEsperada}, retorno: ${retorno}})`
      );
    } else {
      this.#retorno = retorno;
      this.#entradaEsperada = entradaEsperada;
    }
  }

  execute(entrada) {
    if (
      entrada === this.#entradaEsperada ||
      this.#entradaEsperada === MockService.#ANY
    ) {
      return this.#retorno;
    } else {
      return `ERRO: MockService.execute esperou receber (${
        this.#entradaEsperada
      }) mas recebeu (${entrada})`;
    }
  }

  static get ANY() {
    return MockService.#ANY;
  }
}
