import MockService from "./mockService";

export default class MockSerializer extends MockService {
  parse(input) {
    return super.execute(input);
  }
}
