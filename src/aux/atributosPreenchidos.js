let resultado = true;

export default function atributosPreenchidos(objeto) {
  for (let atributo of Object.values(objeto)) {
    if (typeof atributo === "object") {
      atributosPreenchidos(atributo);
    } else if (atributo === undefined) {
      resultado = false;
    }
  }
  return resultado;
}
