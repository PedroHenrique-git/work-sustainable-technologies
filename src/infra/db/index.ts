import mysql from "mysql2/promise";

export default async function getDB() {
  try {
    console.log(process.env);

    return await mysql.createConnection({
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
      host: process.env.NODE_ENV === "production" ? "database" : "localhost",
    });
  } catch (err) {
    console.error(err);
  }
}
