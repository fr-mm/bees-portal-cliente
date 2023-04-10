import BuscarClienteMock from "./buscarClienteMock";
import { atributosPreenchidos } from "../../../auxiliar";

describe("BuscarClienteMock", () => {
  describe(".executar", () => {
    test("retorna otd preenchido", async () => {
      const casoDeUso = new BuscarClienteMock();

      const otd = await casoDeUso.executar();

      const todoPreenchido = atributosPreenchidos(otd);

      //console.dir(otd, { depth: null });
      if (!todoPreenchido) {
        console.dir(otd, { depth: null });
      }
      expect(todoPreenchido).toBeTruthy();
    });
  });
});
