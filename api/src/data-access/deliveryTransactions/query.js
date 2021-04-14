const deliveryTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addDeliveryTransaction,
    removeDeliveryTransaction,
    getAllDeliveryTransactions,
    getAllDeliveryByIdTransactions,
    updateDeliveryTransaction,
    checkDupe,
  });

  async function getAllDeliveryTransactions({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM "deliveryTransactions" a INNER JOIN "suppliers" b ON a.supid = b.supid ORDER BY "deliveryTransactionId"`;
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

  async function getAllDeliveryByIdTransactions({ id }) {
    try {
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `SELECT a.*, b."name", b.barcode, b.description, b.price, c."supName" FROM "itemDeliveries" a INNER JOIN "items" b ON a."id" = b."id" INNER JOIN "suppliers" c ON b.supid = c.supid WHERE a."deliveryTransactionsId" = $1`;
        let params = [id];
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
  async function getId({ data }) {
    try {
      const pool = await connects();
      //add to deliveryTransaction Table
      const result1 = await new Promise((resolve) => {
        const sql = `SELECT supid FROM suppliers WHERE "supName" = $1`;
        let params = [data.supName];
        // console.log(
        //   "dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: ",
        //   data
        // );
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      return result1.rows[0].supid;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function addDeliveryTransaction({ data }) {
    var finalResult = [];
    try {
      const pool = await connects();
      let id = await getId({ data });

      const result = await new Promise((resolve) => {
        const sql = `INSERT INTO "deliveryTransactions" (supid, "deliveryDate", date, "grandTotal") VALUES ($1, $2, $3, $4) RETURNING "deliveryTransactionId"`;
        let params = [id, data.deliveryDate, data.dateAndTime, data.totalPrice];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });

      finalResult.push(result.rows);

      //add items delivered to itemDeliveries table
      try {
        const pool = await connects();

        for (var i = 0; i < data.items.length; i++) {
          const result1 = await new Promise((resolve) => {
            const sql = `INSERT INTO "itemDeliveries" (id, quantity, "deliveryTransactionsId", "subTotal") VALUES ($1, $2, $3, $4) RETURNING id, quantity, "subTotal"`;
            let params = [
              data.items[i].id,
              data.items[i].selectedQuantity,
              result.rows[0].deliveryTransactionId,
              data.items[i].subTotal,
            ];

            pool.query(sql, params, (err, res) => {
              //pool.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          //console.log("DATA ACCESS ITEMS QUERY: ", result1);

          finalResult.push(result1.command, result1.rows);

          try {
            //Update the item quantity in item table according to how much of an item is delivered
            const pool = await connects();
            const result2 = await new Promise((resolve) => {
              const sql = `UPDATE "items" SET quantity = quantity + $1 WHERE id = $2 RETURNING name, price, quantity`;
              let params = [data.items[i].selectedQuantity, data.items[i].id];
              pool.query(sql, params, (err, res) => {
                //pool.end();
                if (err) resolve(err);
                resolve(res);
              });
            });
            finalResult.push(result2.command, result2.rows);
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

  async function removeDeliveryTransaction({ id }) {
    try {
      // use sequelize on inserting
      const DeliveryTransaction = model.DeliveryTransactionModel;
      const res = await DeliveryTransaction.destroy({
        where: {
          deliveryTransactionId: id,
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
        const sql = `SELECT * FROM deliveryTransactions WHERE "name" = $1`;
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

  async function updateDeliveryTransaction({ data }) {
    var finalResult = [];
    try {
      console.log("DISPLAY DATA BEING PASSED BEFORE EXECUTING QUERY: ", data);
      let id = await getId({ data });
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `UPDATE "deliveryTransactions" SET "supid" = $2, "deliveryDate" = $3, date = $4, "grandTotal" = $5  WHERE "deliveryTransactionId" = $1`;
        let params = [
          data.id,
          id,
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

      if (result) {
        try {
          const pool = await connects();
          for (var i = 0; i < data.items.length; i++) {
            const result1 = await new Promise((resolve) => {
              const sql = `UPDATE "itemDeliveries" SET quantity = quantity - $2, "subTotal" = $4 WHERE id = $3 AND "deliveryTransactionsId" = $1 returning quantity`;

              let params = [
                data.id,
                data.items[i].selectedQuantity,
                data.items[i].id,
                data.items[i].subTotal,
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
              //Update the item quantity in item table according to how much of an item is delivered
              const pool = await connects();
              const result2 = await new Promise((resolve) => {
                const sql = `UPDATE "items" SET quantity = quantity - $1 WHERE id = $2 RETURNING name, price, quantity`;
                // console.log(
                //   "DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ",
                //   data.items.items[i].quantity + "loop number: ",
                //   i
                // );
                let params = [result1.rows[i].quantity, data.items[i].id];

                pool.query(sql, params, (err, res) => {
                  //pool.end();
                  if (err) resolve(err);
                  resolve(res);
                });
              });
              console.log(
                "DATAAAA FROM QUERY DELIVERYTRANSACTION : ",
                result1.rows[i].quantity
              );
              finalResult.push(result2.command, result2.rows);
              try {
                const result3 = await new Promise((resolve) => {
                  const sql = `UPDATE "itemDeliveries" SET quantity = $2, "subTotal" = $4 WHERE id = $1 AND "deliveryTransactionsId" = $3 RETURNING id, quantity`;

                  let params = [
                    data.items[i].id,
                    data.items[i].selectedQuantity,
                    data.id,
                    data.items[i].subTotal,
                  ];
                  console.log(
                    "DATAAAA FROM QUERY DELIVERYTRANSACTION DATAACCESS: ",
                    params
                  );
                  pool.query(sql, params, (err, res) => {
                    //pool.end();
                    if (err) resolve(err);
                    resolve(res);
                  });
                });
                //console.log("UPDATE QUANTITY RETURN: ", result3);

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

module.exports = { deliveryTransactionsQuery };
