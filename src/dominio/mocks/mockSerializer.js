import MockService from "./mockService";

export default class MockSerializer extends MockService {
  parse(entrada) {
    return this.execute(entrada);
  }
}
