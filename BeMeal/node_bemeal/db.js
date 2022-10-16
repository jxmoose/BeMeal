const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bemeal",
  password: "MACBruh/Moment314",
  port: 5432
})

module.exports = pool