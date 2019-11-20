// last method in the stack to catch
// all errors and send the status cod
// and error message
// eslint-disable-next-line
const handler = ({ message, status }, req, res, next) => {
  res.send({ message, status });
};

export default handler;
