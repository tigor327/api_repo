const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

//model based on the default database table
const ItemModel = db.define(
  "result"[
    ("customer",
    {
      custId: { type: DataTypes.INTEGER },
    },
    "items",
    {
      items: { type: DataTypes.ARRAY },
    })
  ],

  "transactionTotal",
  {
    totalPrice: { type: DataTypes.INTEGER },
  },
  { freezeTableName: true, timestamps: false, tableName: "items" }
);

module.exports = {
  ItemModel,
};
