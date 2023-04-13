import { BuscaInvalidaErro } from "../erros";
import validarCpfCnpj from "./validarCpfCnpj";

describe("cpfCnpj", () => {
  describe("QUANDO 11 dígitos", () => {
    test("retorna valor", () => {
      const valor = "12345678901";

      const valido = validarCpfCnpj(valor);

      expect(valido).toBe(valor);
    });
  });
  describe("QUANDO 14 dígitos", () => {
    test("retorna valor", () => {
      const valor = "12345678901234";

      const valido = validarCpfCnpj(valor);

      expect(valido).toBe(valor);
    });
  });
  describe("QUANDO cpf com pontos e traço no lugar certo", () => {
    test("retorna cpf só com números", () => {
      const valor = "123.456.789-01";

      const valido = validarCpfCnpj(valor);

      const esperado = "12345678901";
      expect(valido).toBe(esperado);
    });
  });
  describe("QUANDO cnpj com pontos, barra e traço no lugar certo", () => {
    test("retorna cpf só com números", () => {
      const valor = "12.345.678/0001-99";

      const valido = validarCpfCnpj(valor);

      const esperado = "12345678000199";
      expect(valido).toBe(esperado);
    });
  });
  describe("QUANDO cpf com pontos e traço no lugar errado", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "123.456.7890-1";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
  describe("QUANDO cnpj com pontos e traço no lugar errado", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "12.345/678-0001.12";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
  describe("QUANDO valor válido com espaços carcteres especiais", () => {
    test("retorna valor validado", () => {
      const valor = " 123. 456. 789- 01 ";

      const valido = validarCpfCnpj(valor);

      const esperado = "12345678901";
      expect(valido).toBe(esperado);
    });
  });
  describe("QUANDO valor válido com espaço", () => {
    test("retorna valor sem espaços", () => {
      const valor = " 123 456 789 01 ";

      const valido = validarCpfCnpj(valor);

      expect(valido).toBe("12345678901");
    });
  });
  describe("QUANDO 13 dígitos", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "1234567890123";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
  describe("QUANDO menos de 11 dígitos", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "1234567890";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
  describe("QUANDO mais de 14 dígitos", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "123456789012345";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
  describe("QUANDO caracteres não numéricos", () => {
    test("lança BuscaInvalidaErro", () => {
      const valor = "1234567890a";

      expect(() => {
        validarCpfCnpj(valor);
      }).toThrow(BuscaInvalidaErro);
    });
  });
});
