// const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
    throw err;
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = connection;

db.todo = require("../models/todo")(connection, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resync");
});

module.exports = db;
