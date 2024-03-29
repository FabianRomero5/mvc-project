require("dotenv").config();

module.exports = {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    KEY: process.env.KEY,
    DB: process.env.DB_NAME
}