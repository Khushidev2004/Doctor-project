import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,        // switchback.proxy.rlwy.net
  user: process.env.DB_USER,        // root
  password: process.env.DB_PASSWORD,// railway password
  database: process.env.DB_NAME,    // railway
  port: process.env.DB_PORT,        // 25457  ❗❗
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
