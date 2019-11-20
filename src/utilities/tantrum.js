// Custom error that extends
// the default Error object.
// Tantrum provides the ability
// to add status codes to the error message
class Tantrum extends Error {
  constructor(code, message) {
    super(message);
    this.status = code;
  }
}

export default Tantrum;
