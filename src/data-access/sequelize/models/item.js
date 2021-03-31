const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

//model based on the default database table
const ItemModel = db.define(
  "item",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    barcode: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    supid: { type: DataTypes.INTEGER },
    price: { type: DataTypes.DECIMAL },
    quantity: { type: DataTypes.INTEGER },
    itemStatus: { type: DataTypes.STRING },
  },
  { freezeTableName: true, timestamps: false, tableName: "items" }
);

module.exports = {
  ItemModel,
};
