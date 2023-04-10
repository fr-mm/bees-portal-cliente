import axios from "axios";

async function f() {
  const foo = axios.create({
    baseURL:
      "https://beesbank.integrador.saltzap.com/webhook/da99f74f-b327-4629-b51f-c686890f0c30/40",
    timeout: 10000,
    headers: {
      Authorization: "Bearer MmIzMzIzMDEtMmYwNi00NzhjLTg2MzEtY2M4MDQwOTBhZDVk",
      "Content-Type": "application/json",
    },
  });
  const response = await foo.post(
    "",
    JSON.stringify({
      tipo: "cpf/cnpj",
      valor: 33224169000184,
    })
  );
  console.dir(response);
}

test("foo", async () => {
  await f();
  expect(true).toBeTruthy();
});
