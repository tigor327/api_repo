const deliveryTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addDeliveryTransaction,
    removeDeliveryTransaction,
    getAllDeliveryTransactions,
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

  async function addDeliveryTransaction({ data }) {
    var finalResult = [];
    try {
      const pool = await connects();
      //console.log("DATA ACCESS ITEMS QUERY: ", data);
      //add to deliveryTransaction Table
      const result = await new Promise((resolve) => {
        const sql = `INSERT INTO "deliveryTransactions" (supid, date, "grandTotal") VALUES ($1, $2, $3) RETURNING "deliveryTransactionId"`;
        let params = [data.supid, data.dateAndTime, data.totalPrice];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      finalResult.push(result.rows);

      //add itemDelivery data
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
              const sql = `UPDATE "items" SET quantity = quantity + $1 WHERE id = $2 RETURNING name, price, quantity`;
              // console.log(
              //   "DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ",
              //   data.items.items[i].quantity + "loop number: ",
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

  async function updateDeliveryTransaction({ data }) {
    try {
      console.log("info.name from inside query: ", data);
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM deliveryTransactions WHERE id = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const DeliveryTransaction = model.DeliveryTransactionModel;
          const res = await DeliveryTransaction.update(
            {
              name: data.name,
              description: data.description,
              supid: data.supid,
              price: data.price,
              quantity: data.quantity,
              deliveryTransactionStatus: "Active",
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

module.exports = { deliveryTransactionsQuery };
