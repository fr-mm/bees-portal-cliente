export default function calcularQtdDeParcelasPossiveis(contrato) {
  const min = 2;
  const max = 24;
  const parcelasPossiveis = Array.from(
    { length: max - min + 1 },
    (_, i) => i + min
  );
  return parcelasPossiveis;
}
