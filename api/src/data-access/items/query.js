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
        let sql = `SELECT * FROM items a JOIN suppliers b ON a.supid = b.supid ORDER BY id`;
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
      let supId = await getSupId({ data });
      const Item = model.ItemModel;
      const result = await Item.create({
        name: data.name,
        barcode: data.barcode,
        description: data.description,
        supid: supId.rows[0].supid,
        price: data.price,
        quantity: data.quantity,
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
          let supId = await getSupId({ data });
          const Item = model.ItemModel;
          const res = await Item.update(
            {
              name: data.name,
              description: data.description,
              price: data.price,
              quantity: data.quantity,
              itemStatus: data.itemStatus,
              barcode: data.barcode,
              supid: supId.rows[0].supid,
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

  async function getSupId({ data }) {
    try {
      //Get supid from items table using supName sent by front end
      const pool = await connects();
      const result1 = await new Promise((resolve) => {
        let sql = `SELECT supid FROM suppliers WHERE "supName" = $1`;
        let params = [data.supName];
        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      return result1;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = { itemsQuery };
