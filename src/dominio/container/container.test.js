import { atributosPreenchidos } from "../../auxiliar";
import container from "./container";

test("conteiner preenchido", () => {
  const preenchido = atributosPreenchidos(container);

  if (!preenchido) {
    console.dir(container, { depth: null });
  }

  expect(preenchido).toBeTruthy();
});
