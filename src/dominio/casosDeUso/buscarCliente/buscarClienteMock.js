import { statusDeParcelaEnum } from "../../enums";
import BuscarClienteOTDSaida from "../../otds/buscarClienteOTD/buscarClienteOTDSaida";
import Contrato from "../../otds/buscarClienteOTD/contrato";
import ValorDeContrato from "../../otds/buscarClienteOTD/valorDeContrato";
import Parcela from "../../otds/buscarClienteOTD/parcela";
import Parcelas from "../../otds/buscarClienteOTD/parcelas";
import Cliente from "../../otds/buscarClienteOTD/cliente";

export default class BuscarClienteMock {
  #faker;
  #contratos = 2;

  constructor() {
    this.#faker = require("@faker-js/faker").faker;
  }

  async executar() {
    return new BuscarClienteOTDSaida({
      cliente: this.#criarCliente(),
      contratos: this.#criarContratos(),
    });
  }

  #criarCliente() {
    return new Cliente({
      nome: this.#faker.name.fullName(),
      cpfCnpj: this.#gerarInteiroString(11),
    });
  }

  #criarContratos() {
    const contratos = [];
    for (let i = 0; i < this.#contratos; i++) {
      contratos.push(this.#criarContrato());
    }
    return contratos;
  }

  #criarContrato() {
    const valor = this.#faker.datatype.number({ min: 1000, max: 1000000 });
    const parcelas = this.#criarParcelas(valor);
    return new Contrato({
      numero: this.#gerarInteiroString(7),
      parcelas: parcelas,
      valor: this.#criarValorDeContrato({ parcelas, valor }),
    });
  }

  #criarParcelas(valorDoContrato) {
    const quantidadePagas = this.#faker.datatype.number({ min: 0, max: 10 });
    const quantidadeAVencer = this.#faker.datatype.number({ min: 1, max: 10 });
    const quantidadeInadimplentes = this.#faker.datatype.number({
      min: 0,
      max: 10,
    });
    const quantidadeDeParcelas =
      quantidadePagas + quantidadeAVencer + quantidadeInadimplentes;
    const valorDaParcela = valorDoContrato / quantidadeDeParcelas;
    let dataDeVencimento = this.#faker.datatype.datetime();
    let numero = 1;

    function criarParcelas({ status, quantidade }) {
      const parcelas = [];
      for (let i = 0; i < quantidade; i++) {
        const parcela = new Parcela({
          numero,
          status,
          valor: valorDaParcela,
          dataDeVencimento: BuscarClienteMock.#formatarData(dataDeVencimento),
        });
        parcelas.push(parcela);
        dataDeVencimento = new Date(
          dataDeVencimento.getFullYear(),
          dataDeVencimento.getMonth() + 1,
          dataDeVencimento.getDate()
        );
        numero++;
      }
      return parcelas;
    }

    const pagas = criarParcelas({
      status: statusDeParcelaEnum.paga,
      quantidade: quantidadePagas,
    });
    const aVencer = criarParcelas({
      status: statusDeParcelaEnum.aVencer,
      quantidade: quantidadeAVencer,
    });
    const inadimplentes = criarParcelas({
      status: statusDeParcelaEnum.inadimplente,
      quantidade: quantidadeInadimplentes,
    });
    const todas = pagas.concat(aVencer).concat(inadimplentes);
    return new Parcelas({
      todas,
      pagas,
      aVencer,
      inadimplentes,
    });
  }

  #criarValorDeContrato({ parcelas, valor }) {
    return new ValorDeContrato({
      total: valor,
      aVencer: this.#somarValorDeParcelas(parcelas.aVencer),
      inadimplentes: this.#somarValorDeParcelas(parcelas.inadimplentes),
    });
  }

  #somarValorDeParcelas(parcelas) {
    return parcelas.reduce((total, parcela) => total + parcela.valor, 0);
  }

  static #formatarData(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  #gerarInteiroString(digitos) {
    const min = Math.pow(10, digitos - 1);
    const max = parseInt("9".repeat(digitos));
    return parseInt(this.#faker.datatype.number({ min, max })).toString();
  }
}
