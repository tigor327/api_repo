const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

//model based on the default database table
const SalesTransactionModel = db.define(
  "salesTransaction",
  {
    salesTransactionId: { type: DataTypes.INTEGER, primaryKey: true },
    custid: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE },
    total: { type: DataTypes.INTEGER },
  },
  { freezeTableName: true, timestamps: false, tableName: "salesTransactions" }
);

module.exports = {
  SalesTransactionModel,
};
