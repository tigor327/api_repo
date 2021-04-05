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
        let sql = `SELECT * FROM "salesTransactions" a JOIN "itemSales" b ON(a."salesTransactionId"=b."salesTransactionId")`;
        pool.query(sql, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      //console.log("THE RESULTS OF THE QUERY: ", result);
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function addSalesTransaction({ data }) {
    var finalResult = [];
    try {
      const pool = await connects();
      //console.log("DATA ACCESS ITEMS QUERY: ", data);
      //add to salesTransaction Table
      const result = await new Promise((resolve) => {
        const sql = `INSERT INTO "salesTransactions" (custid, date, total) VALUES ($1, $2, $3) RETURNING "salesTransactionId"`;
        let params = [data.custid, data.dateAndTime, data.totalPrice];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      finalResult.push(result.rows);
      //console.log(result);

      //add itemSales data
      try {
        const pool = await connects();
        //console.log("DATA ACCESS ITEMS QUERY: ", data);
        for (var i = 0; i < data.items.items.length; i++) {
          const result1 = await new Promise((resolve) => {
            const sql = `INSERT INTO "itemSales" (id, quantity, "salesTransactionId", "subTotal") VALUES ($1, $2, $3, $4) RETURNING id, quantity, "subTotal"`;
            let params = [
              data.items.items[i].id,
              data.items.items[i].quantity,
              result.rows[0].salesTransactionId,
              data.items.items[i].subTotal,
            ];
            pool.query(sql, params, (err, res) => {
              //pool.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          finalResult.push(result1.command, result1.rows);

          //const result2 = updateItemQuantity({ data, i });
          //finalResult.push(result2.command, result2.rows);
          // console.log(
          //   "AFTER CALLING FUNCTION RESULT2!!!!!!!!!!!!!!!!!#$^@#$^%#@$%#^#@$^%#@$%#@$^%#@$^: ",
          //   result2
          // );

          try {
            //Update item Quantity
            const pool = await connects();
            const result2 = await new Promise((resolve) => {
              const sql = `UPDATE "items" SET quantity = quantity - $1 WHERE id = $2 RETURNING name, price, quantity`;
              // console.log(
              //   "DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ",
              //   data.items.items[0].quantity + "loop number: ",
              //   i
              // );
              let params = [
                data.items.items[i].quantity,
                data.items.items[i].id,
              ];
              pool.query(sql, params, (err, res) => {
                //pool.end();
                if (err) resolve(err);
                resolve(res);
              });
            });
            finalResult.push(result2.command, result2.rows);

            //console.log(result2);
            //return { result };
          } catch (e) {
            console.log("Error: ", e);
          }
        }
        //return { result };
      } catch (e) {
        console.log("Error: ", e);
      }
      console.log(finalResult);
      return { finalResult };
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
          salesTransactionId: id,
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

  // async function updateItemQuantity({ data, i }) {
  //   try {
  //     //Update item Quantity
  //     const pool = await connects();
  //     const result = await new Promise((resolve) => {
  //       const sql = `UPDATE "items" SET quantity = quantity - $1 WHERE id = $2 RETURNING name, price, quantity`;
  //       let params = [data.items.items[i].quantity, data.items.items[i].id];
  //       pool.query(sql, params, (err, res) => {
  //         pool.end();
  //         if (err) resolve(err);
  //         resolve(res);
  //       });
  //     });
  //     //console.log(result);
  //     return result;
  //   } catch (e) {
  //     console.log("Error: ", e);
  //   }
  // }

  //async function checkDupe({ data }) {}
};

module.exports = { salesTransactionsQuery };
