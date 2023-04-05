// 0 = Janeiro, 1 = Fevereiro, etc
const feriadosPorMes = {
  0: [1],
  3: [7, 21],
  4: [1],
  8: [7],
  9: [12],
  10: [2, 15],
  11: [25],
};

const sabado = 6;
const domingo = 0;

function amanha(hoje) {
  return new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1);
}

export default class ProximoDiaUtil extends Date {
  constructor() {
    const hoje = new Date(Date.now());
    let dia = amanha(hoje);
    while (
      [sabado, domingo].includes(dia.getDay()) ||
      feriadosPorMes[dia.getMonth()].includes(dia.getDate())
    ) {
      dia = amanha(dia);
    }
    return dia;
  }
}
