import { atributosPreenchidos } from "../../auxiliar";
import { criarFakeContrato } from "../apis/fakeBackendApi/fakeBuscarContratos";
import ContratoSerializer from "./contratoSerializer";

describe("ContratoSerializer", () => {
  let serializer;
  beforeAll(() => {
    serializer = new ContratoSerializer();
  });
  describe(".parse", () => {
    describe("QUANDO payload valido", () => {
      test("retorna Contrato preenchido", () => {
        const payload = criarFakeContrato();

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
