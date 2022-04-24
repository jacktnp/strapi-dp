const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://ctvqsfrtsxjpsk:35031d9d04617d6fd2b889a3c7ee10cedf73c6d5b5b47b87785b558fd7749430@ec2-54-80-123-146.compute-1.amazonaws.com:5432/d684bsk7og9eaf"
);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
