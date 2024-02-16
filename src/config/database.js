// DOCS: https://sequelize.org/docs/v6/other-topics/migrations/#dynamic-configuration
const fs = require("fs");
require("dotenv/config");

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
    define: {
      timestamps: true,
    },
  },
};
