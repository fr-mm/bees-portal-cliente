import CasoDeUsoBuscarContratos from "./casoDeUsoBuscarContratos";
import { MockBackendAPI } from "../../mocks/apis/";
import { tipoDeBuscaEnum } from "../../enums";
import {
  BuscarClienteOTDEntrada,
  BuscarClienteOTDSaida,
} from "../../otds/buscarClienteOTD";
import { faker } from "@faker-js/faker";
import { random } from "../../../auxiliar";

describe("CasoDeUsoBuscarContratos", () => {
  let expected;
  beforeAll(() => {
    expected = {
      serialized: {
        contrato: "serialized contrato",
        cliente: "serialized cliente",
      },
      apiReturn: ["contrato1", "contrato2"],
    };
  });
  describe(".executar", () => {
    describe("QUANDO otdEntrada valido valido", () => {
      let otdEntrada;
      beforeAll(() => {
        otdEntrada = new BuscarClienteOTDEntrada({
          valor: faker.datatype.number({ min: 10000000000, max: 99999999999 }),
          tipo: random.choice(Array.from(Object.values(tipoDeBuscaEnum))),
        });
      });
      test("retorna otd esperado", async () => {
        const casoDeUso = new CasoDeUsoBuscarContratos({
          api: new MockBackendAPI({
            entradaEsperada: otdEntrada,
            retorno: expected.apiReturn,
          }),
        });

        const otdSaida = await casoDeUso.executar(otdEntrada);

        const esperado = new BuscarClienteOTDSaida({
          cliente: expected.serialized.cliente,
          contratos: expected.serialized.contratos,
        });
        expect(otdSaida).toEqual(esperado);
      });
    });
  });
});
