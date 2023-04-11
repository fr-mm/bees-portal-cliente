import { faker } from "@faker-js/faker";

export function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function float() {
  return faker.datatype.float({
    min: 0,
    max: 999999,
    precision: 0.0001,
  });
}

export function int() {
  return faker.datatype.number({ min: 0, max: 10 });
}

export function kebabDate() {
  const date = faker.date.past();
  return date.toISOString().split("T")[0];
}

export function many(constructor) {
  const result = [];
  const amount = faker.datatype.number({ min: 1, max: 10 });
  for (let i = 0; i < amount; i++) {
    result.push(constructor(i));
  }
  return result;
}
