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
        let sql = `SELECT * FROM "deliveryTransactions" a JOIN "itemDeliveries" b ON(a."deliveryTransactionId"=b."deliveryTransactionsId")`;
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
      console.log("DATA PASSED: ", id);
      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM "deliveryTransactions" a JOIN "itemDeliveries" b ON(a."deliveryTransactionId"=b."deliveryTransactionsId") WHERE b."deliveryTransactionsId" = $1`;
        let params = [id];
        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      console.log("QUERY RESULT GETDELIVERYBYID: ", result);
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function addDeliveryTransaction({ data }) {
    var finalResult = [];
    try {
      const pool = await connects();
      //console.log("DATA ACCESS ITEMS QUERY: ", data);
      //add to deliveryTransaction Table
      const result = await new Promise((resolve) => {
        console.log("BEFORE QUERY INSERT ADDING TRANSACTION DELIVERY: ", data);
        const sql = `INSERT INTO "deliveryTransactions" (supid, "deliveryDate", date, "grandTotal") VALUES ($1, $2, $3, $4) RETURNING "deliveryTransactionId"`;
        let params = [
          data.supid,
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

      finalResult.push(result.rows);

      //add items delivered to itemDeliveries table
      try {
        const pool = await connects();
        //console.log("DATA ACCESS ITEMS QUERY: ", data);
        for (var i = 0; i < data.items.items.length; i++) {
          const result1 = await new Promise((resolve) => {
            console.log("DATA PASSED BEFORE INSERT: ", data.items.items[0]);
            const sql = `INSERT INTO "itemDeliveries" (id, quantity, "deliveryTransactionsId", "subTotal") VALUES ($1, $2, $3, $4) RETURNING id, quantity, "subTotal"`;
            let params = [
              data.items.items[i].id,
              data.items.items[i].quantity,
              result.rows[0].deliveryTransactionId,
              data.items.items[i].subTotal,
            ];
            pool.query(sql, params, (err, res) => {
              //pool.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          console.log(
            "DATAAAA FROM QUERY DELIVERYTRANSACTION DATAACCESS: ",
            result1
          );

          finalResult.push(result1.command, result1.rows);

          try {
            //Update the item quantity in item table according to how much of an item is delivered
            const pool = await connects();
            const result2 = await new Promise((resolve) => {
              const sql = `UPDATE "items" SET quantity = quantity + $1 WHERE id = $2 RETURNING name, price, quantity`;
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
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `UPDATE "deliveryTransactions" SET "supid" = $2, "deliveryDate" = $3, date = $4, "grandTotal" = $5  WHERE "deliveryTransactionId" = $1`;
        let params = [
          data.id,
          data.supid,
          data.deliveryDate,
          data.dateAndTime,
          data.totalPrice,
        ];
        console.log(
          "ASDFASDFSADFSADFASDFASDFASDFASDFASDFSADFSADFASDFASDFASDFASDFASDFSADFSADFASDFASDFASDF: ",
          params
        );

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const pool = await connects();
          console.log("DATA ACCESS ITEMS QUERY: ", data.items.items[0]);
          for (var i = 0; i < data.items.items.length; i++) {
            const result1 = await new Promise((resolve) => {
              const sql = `UPDATE "itemDeliveries" SET quantity = quantity - $2, "subTotal" = $4 WHERE id = $1 AND "deliveryTransactionsId" = $3 returning quantity`;

              let params = [
                data.items.items[i].id,
                data.items.items[i].quantity,
                data.id,
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
              //Update the item quantity in item table according to how much of an item is delivered
              const pool = await connects();
              const result2 = await new Promise((resolve) => {
                const sql = `UPDATE "items" SET quantity = quantity - $1 WHERE id = $2 RETURNING name, price, quantity`;
                // console.log(
                //   "DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ",
                //   data.items.items[i].quantity + "loop number: ",
                //   i
                // );
                console.log("DATA PASSED BEFORE INSERT: ", result1.rows);
                let params = [result1.rows[0].quantity, data.items.items[i].id];
                pool.query(sql, params, (err, res) => {
                  //pool.end();
                  if (err) resolve(err);
                  resolve(res);
                });
              });
              //console.log("DATAAAA FROM QUERY DELIVERYTRANSACTION : ", result2);
              finalResult.push(result2.command, result2.rows);
              try {
                const result3 = await new Promise((resolve) => {
                  const sql = `UPDATE "itemDeliveries" SET quantity = $2, "subTotal" = $4 WHERE id = $1 AND "deliveryTransactionsId" = $3 RETURNING id, quantity`;

                  let params = [
                    data.items.items[i].id,
                    data.items.items[i].quantity,
                    data.id,
                    data.items.items[i].subTotal,
                  ];
                  // console.log(
                  //   "DATAAAA FROM QUERY DELIVERYTRANSACTION DATAACCESS: ",
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

module.exports = { deliveryTransactionsQuery };
