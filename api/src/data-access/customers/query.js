const customerQuery = ({ connects, model }) => {
  return Object.freeze({
    addCustomer,
    removeCustomer,
    getAllCustomers,
    updateCustomer,
    checkDupe,
  });

  async function getAllCustomers({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM customers ORDER BY custid`;
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

  async function addCustomer({ data }) {
    try {
      const Customer = model.CustomerModel;
      const result = await Customer.create({
        custName: data.custName,
        custContact: data.custContact,
        custAddress: data.custAddress,
        custStatus: "Active",
      });
      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function getCustomerById({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM customers WHERE custid = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      return result.rows;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateCustomer({ data }) {
    let checkExist = await getCustomerById({ data });
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ", checkExist);
    if (checkExist) {
      try {
        const Customer = model.CustomerModel;
        const result = await Customer.update(
          {
            custName: data.custName,
            custContact: data.custContact,
            custAddress: data.custAddress,
            custStatus: data.custStatus,
          },
          {
            where: { custid: data.id },
          }
        );
        //console.log("RESULT is NOT EMPTY", result1.rows);
        let customer = await getCustomerById({ data });
        return customer;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  }

  async function removeCustomer({ id }) {
    try {
      // use sequelize on inserting
      const Customer = model.CustomerModel;
      const res = await Customer.destroy({
        where: {
          custid: id,
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
        const sql = `SELECT * FROM customers WHERE "custName" = $1`;
        let params = [data.custName];

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

module.exports = { customerQuery };
