import MockService from "./mockService";

export default class TestMockBackendApi extends MockService {
  async buscarContratos(entrada) {
    return super.execute(entrada);
  }
  async simularAcordo(entrada) {
    return super.execute(entrada);
  }
}
