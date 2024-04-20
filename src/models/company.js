const Sequelize = require("sequelize");
const sequelize = require("../database");

const Company = sequelize.define("company", {
  name: Sequelize.STRING,
  country: Sequelize.STRING,
  website: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = Company;
