import { faker } from "@faker-js/faker";
import { atributosPreenchidos, random } from "../../../auxiliar";
import { tipoDeBuscaEnum } from "../../enums";
import FakeBackendAPI from "./fakeBackendApi";

describe("FakeBackendAPI", () => {
  let api;
  let type;
  let value;
  beforeAll(() => {
    api = new FakeBackendAPI();
    type = random.choice(Array.from(Object.values(tipoDeBuscaEnum)));
    value = faker.datatype
      .number({ min: 10000000000, max: 99999999999 })
      .toString();
  });
  describe(".buscarContratos", () => {
    describe("QUANDO chamado", () => {
      test("retorna status 200", async () => {
        const response = await api.buscarContratos({ type, value });

        expect(response.status).toBe(200);
      });

      test("retorna contrato preenchido", async () => {
        const response = await api.buscarContratos({ type, value });

        const preenchido = atributosPreenchidos(response.data);
        if (!preenchido) {
          console.dir(response.data, { depth: null });
        }
        expect(preenchido).toBeTruthy();
      });
    });
  });
});
