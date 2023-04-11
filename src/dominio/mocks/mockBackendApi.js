import MockService from "./mockService";

export default class TestMockBackendApi extends MockService {
  buscarContratos(entrada) {
    return this.execute(entrada);
  }
}
