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
        let sql = `SELECT * FROM users WHERE "userTypeId" = 3 ORDER BY userid`;
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
      console.log("ITEMMMMMMMMMMMMMMMMM INFOOOOOOOOOOOOOOOOOOOOOOO: ", data);
      const Customer = model.CustomerModel;
      const result = await Customer.create({
        userName: data.userName,
        userContact: data.userContact,
        userAddress: data.userAddress,
        userStatus: "Active",
        userTypeId: 3,
      });
      console.log("RESULT MADAPAKA: ", result);

      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateCustomer({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM users WHERE userid = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const Customer = model.CustomerModel;
          const result = await Customer.update(
            {
              userName: data.custName,
              userContact: data.custContact,
              userAddress: data.custAddress,
              userStatus: data.custStatus,
            },
            {
              where: { userid: data.id },
            }
          );

          return { result };
        } catch (e) {
          console.log("Error: ", e);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function removeCustomer({ id }) {
    try {
      // use sequelize on inserting
      const Customer = model.CustomerModel;
      const res = await Customer.destroy({
        where: {
          userid: id,
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
        const sql = `SELECT * FROM users WHERE "userName" = $1`;
        let params = [data.userName];

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
