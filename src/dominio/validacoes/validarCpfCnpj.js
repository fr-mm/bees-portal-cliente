import { BuscaInvalidaErro } from "../erros";

const regex = {
  cpf: {
    comChars: /^(\d{3}\.){2}\d{3}-\d{2}$/,
    semChars: /^\d{11}$/,
  },
  cnpj: {
    comChars: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    semChars: /^\d{14}$/,
  },
  charsEspeciais: /[.\-/]/g,
  espacos: /\s/g,
};

const validacoes = [
  regex.cpf.semChars,
  regex.cpf.comChars,
  regex.cnpj.semChars,
  regex.cnpj.comChars,
];

export default function validarCpfCnpj(valor) {
  valor = valor.replace(regex.espacos, "");
  if (valido(valor)) {
    return valor.replace(regex.charsEspeciais, "");
  } else {
    throw new BuscaInvalidaErro(valor);
  }
}

function valido(valor) {
  for (let validacao of validacoes) {
    if (valor.match(validacao)) {
      return true;
    }
  }
  return false;
}
