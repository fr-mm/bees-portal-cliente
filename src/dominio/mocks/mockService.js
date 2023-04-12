export default class MockService {
  expected;
  result;

  constructor({ expected, result }) {
    this.expected = expected;
    this.result = result;
  }

  execute(input) {
    if (input === this.expected) {
      return this.result;
    }
  }
}
