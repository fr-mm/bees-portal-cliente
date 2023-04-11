import { atributosPreenchidos } from "../../../../auxiliar";
import mockBusucarContratos from "./mockBuscarContratos";

describe("mockBusucarContrato", () => {
  describe("QUANDO chamado", () => {
    let resultado;
    beforeAll(() => {
      resultado = mockBusucarContratos();
    });
    test("retorna Array", () => {
      expect(resultado).toBeInstanceOf(Array);
    });
    test("retorna pelo menos um objeto", () => {
      expect(resultado.length).toBeGreaterThan(0);
    });
    test("primeiro está totalmente preenchido", () => {
      const preenchido = atributosPreenchidos(resultado[0]);

      if (!preenchido) {
        console.dir(resultado, { depth: null });
      }

      expect(preenchido).toBeTruthy();
    });
  });
});
