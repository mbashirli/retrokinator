const Pool = require("pg").Pool;

const PASSWORD = process.env.PASSWORD;

const pool = new Pool({
  user: "postgres",
  password: `${PASSWORD}`,
  host: "localhost",
  port: 5432,
  database: "retrokinator",
});

module.exports = pool;
