import CasoDeUsoSimularAcordo from "./casoDeUsoSimularAcordo";
import { MockApiResponse, MockBackendAPI, MockSerializer } from "../../mocks";
import {
  SimularAcordoOTDEntrada,
  SimularAcordoOTDSaida,
} from "../../otds/simularAcordoOTD";

describe("CasoDeUsoSimularAcordo", () => {
  describe(".executar", () => {
    describe("QUANDO otdEntrada váido", () => {
      test("retorna otd esperado", async () => {
        const otdEntradaMock = "otdEntrada";
        const serializerReturnMock = "serialized";
        const apiReturnMock = new MockApiResponse([serializerReturnMock]);
        const apiMock = new MockBackendAPI({
          entradaEsperada: otdEntradaMock,
          retorno: new MockApiResponse(apiReturnMock),
        });
        const serializerMock = new MockSerializer({
          expected: otdEntradaMock,
          result: serializerReturnMock,
        });
        const casoDeUso = new CasoDeUsoSimularAcordo({
          api: apiMock,
          simulacaoDeAcordoSerializer: serializerMock,
        });

        const otdSaida = await casoDeUso.executar(otdEntradaMock);

        const otdSaidaEsperado = new SimularAcordoOTDSaida({
          simulacoes: [serializerReturnMock],
        });
        expect(otdSaida).toEqual(otdSaidaEsperado);
      });
    });
  });
});
