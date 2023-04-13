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
};

export default container;
