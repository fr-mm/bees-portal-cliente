import fakeBusucarContratos from "./fakeBuscarContratos";

export default class FakeBackendAPI {
  async buscarContratos({ type, value }) {
    const contratos = fakeBusucarContratos();
    return { status: 200, data: contratos };
  }
}
