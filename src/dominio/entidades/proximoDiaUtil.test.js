import ProximoDiaUtil from "./proximoDiaUtil";

describe("ProximoDiaUtil", () => {
  describe(".constructor", () => {
    describe("QUANDO proximo dia é útil", () => {
      test("retorna próximo dia", () => {
        Date.now = jest.fn(() => new Date(2023, 3, 5));

        const proximoDiaUtil = new ProximoDiaUtil();

        expect(proximoDiaUtil).toEqual(new Date(2023, 3, 6));
      });
    });

    describe("QUANDO sexta feira", () => {
      test("retorna segunda feira", () => {
        Date.now = jest.fn(() => new Date(2023, 2, 31));

        const proximoDiaUtil = new ProximoDiaUtil();

        expect(proximoDiaUtil).toEqual(new Date(2023, 3, 3));
      });
    });

    describe("QUANDO proximo dia é ferido", () => {
      test("retorna próximo dia útil", () => {
        Date.now = jest.fn(() => new Date(2023, 3, 6));

        const proximoDiaUtil = new ProximoDiaUtil();

        expect(proximoDiaUtil).toEqual(new Date(2023, 3, 10));
      });
    });
  });
});
