class Cliente {
  nome;
  cpfCnpj;

  /**
   * @param {{
   * nome: string,
   * cpfCnpj: tipoDeBuscaDeClienteEnum
   * }}
   */
  constructor({ nome, cpfCnpj }) {
    this.nome = nome;
    this.cpfCnpj = cpfCnpj;
  }
}

export default Cliente;
