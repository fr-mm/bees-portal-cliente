import { faker } from "@faker-js/faker";
import { random } from "../../../auxiliar";

const situacaoDeContrato = [
  "CANCELADO",
  "EM DIA",
  "INADIMPLENTE",
  "QUITADO",
  "RENEGOCIADO",
];

export default function fakeBusucarContratos() {
  return random.many(criarFakeContrato);
}

let numeroDeParcela;
export function criarFakeContrato() {
  numeroDeParcela = 0;
  return {
    doc: faker.datatype
      .number({ min: 10000000000000, max: 99999999999999 })
      .toString(),
    nome: faker.name.fullName(),
    situacao: random.choice(situacaoDeContrato),
    valor_total_atraso: random.float(),
    valor_total_negociavel: random.float(),
    total_parcelas_pagas: random.int(),
    total_parcelas_vencer: random.int(),
    total_parcelas_vencidas: random.int(),
    valor_total_multa: random.float(),
    valor_total_juros: random.float(),
    valor_total_desagio: random.float(),
    dias_total_atraso: random.int(),
    parcelas_pagas: random.many(() => criarFakeParcela("PAGA")),
    parcelas_a_vencer: random.many(() => criarFakeParcela("EM ABERTO")),
    parcelas_renegociadas: random.many(() => criarFakeParcela("VENCIDA")),
    parcelas_atrasadas: random.many(() => criarFakeParcela("RENEGOCIADA")),
    telefone_principal: faker.phone.number("+##(##)#########"),
    realizadoPor: "TBD",
    created: "TBD",
    tipo_contrato: faker.commerce.productName(),
    valor_emprestimo: random.float(),
    valor_total_encargos: "TBD",
    contrato: faker.datatype.number({ min: 10000, max: 99999 }).toString(),
    FIDC: faker.word.adjective().toUpperCase(),
    phone_used: "TBD",
    phone_whatsapp_confirmed: "TBD",
    emails: "TBD",
    condition: "TBD",
    vencimento: random.kebabDate(),
    reference_date: random.kebabDate(),
  };
}

function criarFakeParcela(status) {
  numeroDeParcela++;
  return {
    valor_parcela: random.float(),
    valor_parcela_atualizado: random.float(),
    valor_multa_parcela: random.float(),
    valor_juros_parcela: random.float(),
    valor_desagio_parcela: random.float(),
    dias_atraso_parcela: random.int(),
    vencimento_original_parcela: random.kebabDate(),
    numero_parcela: numeroDeParcela,
    status_parcela: status,
  };
}
