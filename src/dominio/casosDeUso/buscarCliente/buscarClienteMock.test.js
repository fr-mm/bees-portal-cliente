import BuscarClienteMock from "./buscarCienteMock";
import { atributosPreenchidos } from "../../../aux";

describe("BuscarClienteMock", () => {
  describe(".executar", () => {
    test("retorna otd preenchido", async () => {
      const casoDeUso = new BuscarClienteMock();

      const otd = await casoDeUso.executar();

      const todoPreenchido = atributosPreenchidos(otd);

      if (!todoPreenchido) {
        console.dir(otd, { depth: null });
      }
      expect(todoPreenchido).toBeTruthy();
    });
  });
});
