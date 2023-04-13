import CasoDeUsoSimularAcordo from "./casoDeUsoSimularAcordo";
import { MockApiResponse, MockBackendAPI, MockSerializer } from "../../mocks";
import { SimularAcordoOTDSaida } from "../../otds/simularAcordoOTD";

describe("CasoDeUsoSimularAcordo", () => {
  describe(".executar", () => {
    describe("QUANDO otdEntrada váido", () => {
      test("retorna otd esperado", async () => {
        const otdEntradaMock = "otdEntrada";
        const serializedItem = "serialized";
        const unserializedItem = "unserialized";
        const apiMock = new MockBackendAPI({
          expected: otdEntradaMock,
          result: new MockApiResponse([unserializedItem]),
        });
        const serializerMock = new MockSerializer({
          expected: unserializedItem,
          result: serializedItem,
        });
        const casoDeUso = new CasoDeUsoSimularAcordo({
          api: apiMock,
          simulacaoDeAcordoSerializer: serializerMock,
        });

        const otdSaida = await casoDeUso.executar(otdEntradaMock);

        const otdSaidaEsperado = new SimularAcordoOTDSaida({
          simulacoes: [serializedItem],
        });
        expect(otdSaida).toEqual(otdSaidaEsperado);
      });
    });
  });
});
