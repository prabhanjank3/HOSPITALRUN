require("dotenv").config();
const Sequelize = require("sequelize");
const ENVIRONMENT = process.env.ENVIRONMENT || "test";
const dbConfig = require("./db.config")[ENVIRONMENT];

const sequelizeInstance = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port:dbConfig.port || 5432
  }
);

module.exports = sequelizeInstance;
