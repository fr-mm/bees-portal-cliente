export default class MockApiResponse {
  status;
  data;

  constructor(data, status = 200) {
    this.data = data;
    this.status = status;
  }
}
