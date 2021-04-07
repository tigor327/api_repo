const salesTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addSalesTransaction,
    removeSalesTransaction,
    getAllSalesTransactions,
    getAllSalesByIdTransactions,
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

  async function getAllSalesByIdTransactions({ id }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM "salesTransactions" a JOIN "itemSales" b ON(a."salesTransactionId"=b."salesTransactionId") WHERE b."salesTransactionId" = $1 `;
        let params = [id];
        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      console.log("THE RESULTS OF THE QUERY: ", result);
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
        const sql = `INSERT INTO "salesTransactions" (custid, "deliveryDate", date, total) VALUES ($1, $2, $3, $4) RETURNING "salesTransactionId"`;
        let params = [
          data.custid,
          data.deliveryDate,
          data.dateAndTime,
          data.totalPrice,
        ];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      console.log(
        "ASDSDFASDFFASDFSADFASDFSADFSADGDASFBZXCVBSDFZBVDFZGDASFGVXZCVSDFGASDVZXCFGDRVZXFVDFASGDFV: ",
        result
      );
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
  async function updateSalesTransaction({ data }) {
    var finalResult = [];
    try {
      console.log("info.name from inside query: ", data);
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `UPDATE "salesTransactions" SET "custid" = $2, date = $3, "total" = $4  WHERE "salesTransactionId" = $1`;
        let params = [
          data.id,
          data.custid,
          data.dateAndTime,
          data.transactionTotal,
        ];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const pool = await connects();
          //console.log("DATA ACCESS ITEMS QUERY: ", data);
          for (var i = 0; i < data.items.items.length; i++) {
            const result1 = await new Promise((resolve) => {
              console.log("DATA PASSED BEFORE INSERT: ", data.items.items[i]);
              const sql = `UPDATE "itemSales" SET quantity = quantity - $2, "subTotal" = $4 WHERE id = $1 AND "salesTransactionId" = $3 returning quantity`;

              let params = [
                data.items.items[i].id,
                data.items.items[i].quantity,
                data.id,
                data.items.items[i].subTotal,
              ];
              // console.log(
              //   "DATAAAA FROM QUERY SALESTRANSACTION DATAACCESS: ",
              //   params
              // );
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
              //Update the item quantity in item table according to how much of an item is delivered
              const pool = await connects();
              const result2 = await new Promise((resolve) => {
                const sql = `UPDATE "items" SET quantity = quantity - $1 WHERE id = $2 RETURNING name, price, quantity`;
                // console.log(
                //   "DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ",
                //   data.items.items[i].quantity + "loop number: ",
                //   i
                // );
                console.log(
                  "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ",
                  result1.rows
                );
                let params = [result1.rows[0].quantity, data.items.items[i].id];
                pool.query(sql, params, (err, res) => {
                  //pool.end();
                  if (err) resolve(err);
                  resolve(res);
                });
              });
              //console.log("DATAAAA FROM QUERY SALESTRANSACTION : ", result2);
              finalResult.push(result2.command, result2.rows);
              try {
                const result3 = await new Promise((resolve) => {
                  const sql = `UPDATE "itemSales" SET quantity = $2, "subTotal" = $4 WHERE id = $1 AND "salesTransactionsId" = $3 RETURNING id, quantity`;

                  let params = [
                    data.items.items[i].id,
                    data.items.items[i].quantity,
                    data.id,
                    data.items.items[i].subTotal,
                  ];
                  // console.log(
                  //   "DATAAAA FROM QUERY SALESTRANSACTION DATAACCESS: ",
                  //   params
                  // );
                  pool.query(sql, params, (err, res) => {
                    //pool.end();
                    if (err) resolve(err);
                    resolve(res);
                  });
                });
                finalResult.push(result3.command, result3.rows);
              } catch (e) {
                console.log("Error: ", e);
              }
              //console.log(result2);
              //return { result };
            } catch (e) {
              console.log("Error: ", e);
            }
          }
          return { finalResult };
        } catch (e) {
          console.log("Error: ", e);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = { salesTransactionsQuery };
