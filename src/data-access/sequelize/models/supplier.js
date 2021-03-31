const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const SupplierModel = db.define(
  "supplier",
  {
    supid: { type: DataTypes.INTEGER, primaryKey: true },
    supName: DataTypes.STRING,
    supContact: DataTypes.STRING,
    supAddress: DataTypes.STRING,
    supStatus: DataTypes.STRING,
  },
  { freezeTableName: true, timestamps: false, tableName: "suppliers" }
);

module.exports = {
  SupplierModel,
};
