export default class MetodoAbstratoNaoImplemenetadoErro extends Error {
  constructor(methodName) {
    const message = `${methodName} não implementado`;
    super(message);
  }
}
