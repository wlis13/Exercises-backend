import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export default connection;
