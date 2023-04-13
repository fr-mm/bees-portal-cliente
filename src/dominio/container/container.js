import { FakeBackendAPI } from "../apis";
import {
  CasoDeUsoBuscarContratos,
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

const container = {
  casoDeUso: {
    buscarContratos: casoDeUsoBuscarContratos,
    simularAcordo: casoDeUsoSimularAcordo,
  },
  validar: {
    cpfCnpj: validarCpfCnpj,
    numeroDeContrato: validarNumeroDeContrato,
  },
};

export default container;
