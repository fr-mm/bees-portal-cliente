import { criarArraySequencial } from "../../auxiliar";
import { ValorMuitoBaixoParaDividirErro } from "../erros";

export default function calcularQtdsDeParcelasPossiveis({
  valorTotal,
  entrada,
}) {
  const valorParcelando = valorTotal - entrada;
  const qtdMin = 2;
  const qtdMax = 24;
  const valorMin = 50;
  let resultado = criarArraySequencial({ min: qtdMin, max: qtdMax });
  let valorParcela = valorParcelando / qtdMax;
  while (valorParcela < valorMin) {
    resultado.pop();
    if (resultado.length === 0) {
      throw new ValorMuitoBaixoParaDividirErro(valorParcela);
    }
    valorParcela = valorParcelando / resultado[resultado.length - 1];
  }
  return resultado;
}
