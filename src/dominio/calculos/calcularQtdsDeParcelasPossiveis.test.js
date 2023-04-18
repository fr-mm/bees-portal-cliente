import { ValorMuitoBaixoParaDividirErro } from "../erros";
import calcularQtdsDeParcelasPossiveis from "./calcularQtdsDeParcelasPossiveis";

const min = 2;

describe("calcularQtdsDeParcelasPossiveis", () => {
  describe("QUANDO valor da parcela seria menor que 50", () => {
    test("retorna quantidades one valor da parcela é pelo menos 50", () => {
      const resultado = calcularQtdsDeParcelasPossiveis({
        valorTotal: 150,
        entrada: 0,
      });

      const esperado = [2, 3];
      expect(resultado).toEqual(esperado);
    });
  });
  describe("QUANDO seria possível mais de 24 parcelas", () => {
    test("retorna até 24", () => {
      const resultado = calcularQtdsDeParcelasPossiveis({
        valorTotal: 9999999999999,
        entrada: 0,
      });

      const esperado = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24,
      ];
      expect(resultado).toEqual(esperado);
    });
  });
  describe("QUANDO valor muito baixo para dividir", () => {
    test("lança ValorMuitoBaixoParaDividirErro", () => {
      expect(() => {
        calcularQtdsDeParcelasPossiveis({ valorTotal: 49, entrada: 0 });
      }).toThrow(ValorMuitoBaixoParaDividirErro);
    });
  });
});
