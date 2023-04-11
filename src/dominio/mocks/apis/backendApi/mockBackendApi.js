import mockBusucarContratos from "./mockBuscarContratos";

export default class MockBackendAPI {
  async buscarContratos({ type, value }) {
    const contratos = mockBusucarContratos();
    return { status: 200, data: contratos };
  }
}
