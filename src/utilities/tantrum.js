class Tantrum extends Error {
  constructor(code, message) {
    super(message);
    this.status = code;
  }
}

export default Tantrum;
