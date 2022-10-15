const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tset",
  password: "MACBruh/Moment314",
  port: 5432
})

module.exports = pool