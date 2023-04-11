import Cliente from "../otds/buscarClienteOTD/cliente";

export default class ClienteSerializer {
  parse(payload) {
    return new Cliente({
      nome: payload.nome,
      cpfCnpj: payload.doc,
    });
  }
}
