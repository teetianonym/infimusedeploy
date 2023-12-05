const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();

const db_name = process.env.DATABASE_NAME;
const db_username = process.env.DATABASE_USERNAME;
const db_password = process.env.DATABASE_PASSWORD;
const db_host = process.env.DATABASE_HOST;
const db_dialect = process.env.DATABASE_DIALECT;

module.exports = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect: db_dialect,
});
