import {
  choice,
  randomFloat,
  randomInt,
  kebabDate,
  many,
} from "../../functions";
import { faker } from "@faker-js/faker";

const situacaoDeContrato = [
  "CANCELADO",
  "EM DIA",
  "INADIMPLENTE",
  "QUITADO",
  "RENEGOCIADO",
];

export default function mockBusucarContratos() {
  return many(mockarContrato);
}

export function mockarContrato() {
  return {
    doc: faker.datatype
      .number({ min: 10000000000000, max: 99999999999999 })
      .toString(),
    nome: faker.company.name(),
    situacao: choice(situacaoDeContrato),
    valor_total_atraso: randomFloat(),
    valor_total_negociavel: randomFloat(),
    total_parcelas_pagas: randomInt(),
    total_parcelas_vencer: randomInt(),
    total_parcelas_vencidas: randomInt(),
    valor_total_multa: randomFloat(),
    valor_total_juros: randomFloat(),
    valor_total_desagio: randomFloat(),
    dias_total_atraso: randomInt(),
    parcelas_a_vencer: many(() => mockarParcela("EM ABERTO")),
    parcelas_pagas: many(() => mockarParcela("PAGA")),
    parcelas_atrasadas: many(() => mockarParcela("RENEGOCIADA")),
    parcelas_renegociadas: many(() => mockarParcela("VENCIDA")),
    telefone_principal: faker.phone.number("+##(##)#########"),
    realizadoPor: "TBD",
    created: "TBD",
    tipo_contrato: faker.commerce.productName(),
    valor_emprestimo: randomFloat(),
    valor_total_encargos: "TBD",
    contrato: faker.datatype.number({ min: 10000, max: 99999 }).toString(),
    FIDC: faker.word.adjective().toUpperCase(),
    phone_used: "TBD",
    phone_whatsapp_confirmed: "TBD",
    emails: "TBD",
    condition: "TBD",
    vencimento: kebabDate(),
    reference_date: kebabDate(),
  };
}

function mockarParcela(status) {
  return {
    valor_parcela: randomFloat(),
    valor_parcela_atualizado: randomFloat(),
    valor_multa_parcela: randomFloat(),
    valor_juros_parcela: randomFloat(),
    valor_desagio_parcela: randomFloat(),
    dias_atraso_parcela: randomInt(),
    vencimento_original_parcela: kebabDate(),
    numero_parcela: randomInt(),
    status_parcela: status,
  };
}
