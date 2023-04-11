import { FakeBackendAPI } from "../apis";
import { CasoDeUsoBuscarContratos } from "../casosDeUso";
import { ClienteSerializer, ContratoSerializer } from "../serializers";

const container = {
  casoDeUso: {
    buscarContratos: new CasoDeUsoBuscarContratos({
      api: new FakeBackendAPI(),
      contratoSerializer: new ContratoSerializer(),
      clienteSerializer: new ClienteSerializer(),
    }),
  },
};

export default container;
