import Cliente from "../otds/buscarClienteOTD/cliente";

export default class ClienteSerializer {
  parse(contrato) {
    return new Cliente({
      nome: contrato.nome,
      cpfCnpj: contrato.doc,
    });
  }
}
