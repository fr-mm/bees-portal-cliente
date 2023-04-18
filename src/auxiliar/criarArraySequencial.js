export default function criarArraySequencial({ min, max }) {
  return Array.from(Array(max - min + 1).keys(), (x) => x + min);
}
