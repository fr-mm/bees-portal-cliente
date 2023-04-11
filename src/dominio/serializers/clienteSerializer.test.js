import { atributosPreenchidos } from "../../auxiliar";
import { mockarContrato } from "../mocks/apis/backendApi/mockBuscarContratos";
import ClienteSerializer from "./clienteSerializer";

describe("ClienteSerializer", () => {
  let serializer;
  beforeAll(() => {
    serializer = new ClienteSerializer();
  });
  describe(".parse", () => {
    describe("QUANDO payload valido", () => {
      let payload;
      beforeAll(() => {
        payload = mockarContrato();
      });
      test("retorna Cliente preenchido", () => {
        const cliente = serializer.parse(payload);

        const preenchido = atributosPreenchidos(cliente);
        if (!preenchido) {
          console.dir(cliente, { depth: null });
        }
        expect(preenchido).toBeTruthy();
      });
    });
  });
});
