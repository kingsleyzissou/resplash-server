// last method in the stack to catch
// all errors and send the status cod
// and error message
// eslint-disable-next-line
const handler = ({ message, status }, req, res, next) => {
  res.status(status).send({ message });
};

export default handler;
