const { app } = require("electron");
const path = require("path");
const Sequelize = require("sequelize");

const memory = new Sequelize("sqlite::memory:");
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(app.getPath("userData"), "db.sqlite"),
});

const controllers = {};

const initializeDB = async () => {
  try {
    await db.sync();
    await memory.sync();
    await db.authenticate();
    await memory.authenticate();
  } catch (error) {}
};

module.exports = { db, memory, initializeDB };
