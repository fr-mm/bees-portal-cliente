export default class ValorMuitoBaixoParaDividirErro extends Error {
  constructor(valor) {
    super(`Valor geraria menos de duas parcelas: ${valor}`);
  }
}
