import { FakeBackendAPI } from "../apis";
import { calcularQtdDeParcelasPossiveis } from "../calculos";
import {
  CasoDeUsoBuscarContratos,
  CasoDeUsoGerarAcordo,
  CasoDeUsoSimularAcordo,
} from "../casosDeUso";
import {
  ClienteSerializer,
  ContratoSerializer,
  SimulacaoDeAcordoSerializer,
} from "../serializers";
import { validarCpfCnpj, validarNumeroDeContrato } from "../validacoes";

const api = new FakeBackendAPI();

const contratoSerializer = new ContratoSerializer();
const clienteSerializer = new ClienteSerializer();
const simulacaoDeAcordoSerializer = new SimulacaoDeAcordoSerializer();

const casoDeUsoBuscarContratos = new CasoDeUsoBuscarContratos({
  api,
  contratoSerializer,
  clienteSerializer,
});
const casoDeUsoSimularAcordo = new CasoDeUsoSimularAcordo({
  api,
  simulacaoDeAcordoSerializer,
});
const casoDeUsoGerarAcordo = new CasoDeUsoGerarAcordo({
  api,
});

const container = {
  casoDeUso: {
    buscarContratos: casoDeUsoBuscarContratos,
    simularAcordo: casoDeUsoSimularAcordo,
    gerarAcordo: casoDeUsoGerarAcordo,
  },
  validar: {
    cpfCnpj: validarCpfCnpj,
    numeroDeContrato: validarNumeroDeContrato,
  },
  calcular: {
    qtdsDeParcelasPossiveis: calcularQtdDeParcelasPossiveis,
  },
};

export default container;
