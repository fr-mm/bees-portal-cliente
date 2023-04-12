import { faker } from "@faker-js/faker";
import { atributosPreenchidos } from "../../../auxiliar";
import fakeSimularAcordo from "./fakeSimularAcordo";

describe("fakeSimularAcordo", () => {
  let otdEntrada;
  beforeAll(() => {
    otdEntrada = {
      entrada: faker.datatype.number({ min: 0, max: 5000 }),
    };
  });
  test("retorna objetos preenchidos", () => {
    const simulacoes = fakeSimularAcordo(otdEntrada);

    let preenchidos = true;
    for (let simulacao of simulacoes) {
      if (!atributosPreenchidos(simulacao)) {
        preenchidos = false;
      }
    }
    if (!preenchidos) {
      console.log(simulacoes);
    }
    expect(preenchidos).toBeTruthy();
  });
});
