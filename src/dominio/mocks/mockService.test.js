import MockService from "./mockService";

describe("MockSerializer", () => {
  describe(".constructor", () => {
    describe("QUANDO argumentos validos", () => {
      test("não lança erro", () => {
        new MockService({ entradaEsperada: "foo", retorno: "bar" });
      });
    });
    describe("QUANDO entradaEsperada não informada", () => {
      test("lança erro", () => {
        expect(() => new MockService({ entradaEsperada: "foo" })).toThrow(
          Error
        );
      });
    });
    describe("QUANDO retorno não informado", () => {
      test("lança erro", () => {
        expect(() => new MockService({ retorno: "bar" })).toThrow(Error);
      });
    });
  });
  describe(".execute", () => {
    let entradaEsperada;
    let retorno;
    let service;
    beforeAll(() => {
      entradaEsperada = "foo";
      retorno = "bar";
    });

    describe("QUANDO entrada esperada", () => {
      test("retorna retorno esperado", () => {
        service = new MockService({ entradaEsperada, retorno });

        const resultado = service.execute(entradaEsperada);

        expect(resultado).toBe(retorno);
      });
    });

    describe("QUANDO inesperada", () => {
      test("retorna diferente do esperado", () => {
        service = new MockService({ entradaEsperada, retorno });

        const resultado = service.execute("inesperado");

        expect(resultado).not.toBe(retorno);
      });
    });

    describe("QUANDO entradaEsperada é any", () => {
      test("retorna retorno esperado", () => {
        service = new MockService({
          entradaEsperada: MockService.ANY,
          retorno,
        });

        const resultado = service.execute("inesperado");

        expect(resultado).toBe(retorno);
      });
    });
  });
});
