import container from "./container";

test("container", () => {
  const mock = container.buscarCliente.executar();

  console.dir(mock, { depth: null });

  expect(true).toBeTruthy();
});
