import CasoDeUsoBuscarContratos from "./casoDeUsoBuscarContratos";
import { atributosPreenchidos } from "../../../auxiliar";
import { MockBackendAPI } from "../../mocks/apis/";
import { ClienteSerializer, ContratoSerializer } from "../../serializers";
import { tipoDeBuscaEnum } from "../../enums";

describe("CasoDeUsoBuscarContratos", () => {
  const casoDeUso = new CasoDeUsoBuscarContratos({
    api: new MockBackendAPI(),
    contratoSerializer: new ContratoSerializer(),
    clienteSerializer: new ClienteSerializer(),
  });
  describe(".executar", () => {
    describe("QUANDO type valido", () => {
      test("retorna otd preenchido", async () => {
        const otdEntrada = { type: tipoDeBuscaEnum.cpfCnpj, value: "123123" };

        const otdSaida = await casoDeUso.executar(otdEntrada);

        const todoPreenchido = atributosPreenchidos(otdSaida);

        //console.dir(otd, { depth: null });
        if (!todoPreenchido) {
          console.dir(otdSaida, { depth: null });
        }
        expect(todoPreenchido).toBeTruthy();
      });
    });
  });
});
