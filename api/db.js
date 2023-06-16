import mysql from "mysql";

export const db = mysql.createConnection({
    host: "nuvem2.c2lhjk0yol6j.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Banco1234",
    database: "Aula_Nuvem2",
});