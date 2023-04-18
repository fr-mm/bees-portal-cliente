export default function calcularEntradaMinima(valorTotal) {
  const porcentagem = valorTotal * 0.08;
  const piso = 100;
  return Math.min(porcentagem, piso);
}
