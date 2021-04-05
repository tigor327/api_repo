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
        let sql = `SELECT * FROM items ORDER BY id`;
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
    console.log("DATA ACCESS ITEMS QUERY: ", data);
    try {
      const Item = model.ItemModel;
      const result = await Item.create({
        name: data.name,
        barcode: data.barcode,
        description: data.description,
        supid: data.supid,
        price: data.price,
        quantity: data.quantity,
        itemStatus: "Active",
      });
      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateItem({ data }) {
    try {
      //console.log("info.name from inside query: ", data);
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM items WHERE id = $1`;
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
          const res = await Item.update(
            {
              name: data.name,
              description: data.description,
              supid: data.supid,
              price: data.price,
              quantity: data.quantity,
              itemStatus: data.itemStatus,
              barcode: data.barcode,
            },
            {
              where: { id: data.id },
            }
          );

          return { res };
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
          id: id,
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
        const sql = `SELECT * FROM items WHERE "name" = $1`;
        let params = [data.name];

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
        const sql = `SELECT * FROM items WHERE "barcode" = $1`;
        let params = [data.barcode];
        console.log("BARCODE TO SEARCH FOR", data.barcode);

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
