import APIBuscarClienteSalt from "./buscarClienteSalt";
import tipoDeBuscaDeClienteEnum from "../enums/tipoDeBuscaDeClienteEnum";

describe("APIBuscarClienteSalt", () => {
  describe("post", () => {
    describe("QUANDO payload valido", () => {
      test("retona status 200", async () => {
        const payload = {
          valor: 33224169000184,
          tipo: tipoDeBuscaDeClienteEnum.cpfCnpj,
        };
        const api = new APIBuscarClienteSalt();

        const resultado = await api.post(payload);

        expect(resultado.status).toBe(200);
      }, 10000);
    });
  });
});
