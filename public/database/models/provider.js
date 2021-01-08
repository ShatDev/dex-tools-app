const { DataTypes } = require("sequelize");
const { db } = require("../config");

const Provider = db.define(
  "Provider",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    network: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = Provider;
