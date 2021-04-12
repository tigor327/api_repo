const itemsQuery = ({ connects, model }) => {
  return Object.freeze({
    addItem,
    removeItem,
    getAllItems,
    updateItem,
    checkDupe,
    checkDupeBarCode,
  });

  async function getAllItems({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM items ORDER BY "itemid"`;
        pool.query(sql, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function addItem({ data }) {
    try {
      const Item = model.ItemModel;

      const result = await Item.create({
        itemName: data.itemName,
        itemBarcode: data.itemBarcode,
        itemDescription: data.itemDescription,
        userId: data.userId,
        itemPrice: data.itemPrice,
        itemQuantity: data.itemQuantity,
        itemStatus: data.itemStatus,
      });

      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateItem({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM items WHERE itemid = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      if (result) {
        try {
          const Item = model.ItemModel;
          const res1 = await Item.update(
            {
              itemName: data.name,
              itemDescription: data.description,
              supid: data.supid,
              itemPrice: data.price,
              itemQuantity: data.quantity,
              itemStatus: data.itemStatus,
              itemBarcode: data.barcode,
            },
            {
              where: { itemid: data.id },
            }
          );
          return { res1 };
        } catch (e) {
          console.log("Error: ", e);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function removeItem({ id }) {
    try {
      // use sequelize on inserting
      const Item = model.ItemModel;
      const res = await Item.destroy({
        where: {
          itemid: id,
        },
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function checkDupe({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        const sql = `SELECT * FROM items WHERE "itemName" = $1`;
        let params = [data.itemName];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  async function checkDupeBarCode({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        const sql = `SELECT * FROM items WHERE "itemBarcode" = $1`;
        let params = [data.itemBarcode];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = { itemsQuery };
