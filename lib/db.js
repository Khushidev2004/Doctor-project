import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "khushi", // XAMP
  database: "khushi_clinic",
});

export default pool;
