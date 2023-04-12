import { faker } from "@faker-js/faker";
import { atributosPreenchidos } from "../../auxiliar";
import { criarFakeSimulacao } from "../apis/fakeBackendApi/fakeSimularAcordo";
import SimulacaoDeAcordoSerializer from "./simulacaoDeAcordoSerializer";

describe("SimulacaoDeAcordoSerializer", () => {
  describe(".parse", () => {
    describe("QUANDO payload valido", () => {
      test("retorna SimulacaoDeAcordo preenchida", () => {
        const payload = criarFakeSimulacao({
          entrada: faker.datatype.number({
            min: 1,
            max: 99999,
            precision: 0.01,
          }),
          qtdParcelas: faker.datatype.number({ min: 2, max: 10 }),
        });
        const serializer = new SimulacaoDeAcordoSerializer();

        const simulacao = serializer.parse(payload);

        const preenchido = atributosPreenchidos(simulacao);
        if (!preenchido) {
          console.dir(simulacao, { depth: null });
        }
        expect(preenchido).toBeTruthy();
      });
    });
  });
});
