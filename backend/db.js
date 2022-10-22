const Pool = require("pg").Pool;

const PASSWORD = process.env.PASSWORD;

const pool = new Pool({
  user: "postgres",
  password: `04072001s`,
  host: "localhost",
  port: 5432,
  database: "retrokinator",
});

module.exports = pool;
