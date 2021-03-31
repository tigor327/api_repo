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
    console.log("DATA ACCESS ITEMS QUERY: ", data);
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
