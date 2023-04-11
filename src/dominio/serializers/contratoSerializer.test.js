import { atributosPreenchidos } from "../../auxiliar";
import { mockarContrato } from "../mocks/apis/backendApi/mockBuscarContratos";
import ContratoSerializer from "./contratoSerializer";

describe("ContratoSerializer", () => {
  let serializer;
  beforeAll(() => {
    serializer = new ContratoSerializer();
  });
  describe(".parse", () => {
    describe("QUANDO payload valido", () => {
      test("retorna Contrato preenchido", () => {
        const payload = mockarContrato();

        const contrato = serializer.parse(payload);

        const preenchido = atributosPreenchidos(contrato);
        if (!preenchido) {
          console.dir(contrato, { depth: null });
        }
        expect(preenchido).toBeTruthy();
      });
    });
  });
});
