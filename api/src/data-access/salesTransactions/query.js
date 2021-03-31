const salesTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addSalesTransaction,
    removeSalesTransaction,
    getAllSalesTransactions,
    updateSalesTransaction,
    checkDupe,
  });

  async function getAllSalesTransactions({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM salesTransactions ORDER BY id`;
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

  async function addSalesTransaction({ data }) {
    try {
      const pool = await connects();
      //console.log("DATA ACCESS ITEMS QUERY: ", data);
      const result = await new Promise((resolve) => {
        const sql = `INSERT INTO "salesTransactions" (custid, date, total) VALUES ($1, $2, $3) RETURNING "salesTransactionId"`;
        let params = [data.custid, data.dateAndTime, data.totalPrice];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      
      try {
        const pool = await connects();
        //console.log("DATA ACCESS ITEMS QUERY: ", data);
        for (var i = 0; i < data.items.items.length; i++) {
          const sql = `INSERT INTO "itemSales" (id, quantity, salesTransactionId, subTotal) VALUES ($1, $2, $3, $4)`;
          let params = [
            data.items.items[i].id,
            data.items.items[i].quantity,
            result.rows[0].salesTransactionId,
            data.items.items[i].subTotal,
          ];
          pool.query(sql, params, (err, res) => {
            pool.end();
          });
        }
        //return { result };
      } catch (e) {
        console.log("Error: ", e);
      }
      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateSalesTransaction({ data }) {
    try {
      console.log("info.name from inside query: ", data);
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM salesTransactions WHERE id = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const SalesTransaction = model.SalesTransactionModel;
          const res = await SalesTransaction.update(
            {
              name: data.name,
              description: data.description,
              supid: data.supid,
              price: data.price,
              quantity: data.quantity,
              salesTransactionStatus: "Active",
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

  async function removeSalesTransaction({ id }) {
    try {
      // use sequelize on inserting
      const SalesTransaction = model.SalesTransactionModel;
      const res = await SalesTransaction.destroy({
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
        const sql = `SELECT * FROM salesTransactions WHERE "name" = $1`;
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
};

module.exports = { salesTransactionsQuery };
