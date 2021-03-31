const supplierQuery = ({ connects, model }) => {
  return Object.freeze({
    addSupplier,
    removeSupplier,
    getAllSuppliers,
    updateSupplier,
    checkDupe,
  });

  async function getAllSuppliers({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM suppliers ORDER BY supid`;
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

  async function addSupplier({ data }) {
    try {
      const Supplier = model.SupplierModel;
      const result = await Supplier.create({
        supName: data.supName,
        supContact: data.supContact,
        supAddress: data.supAddress,
        supStatus: "Active",
      });
      return { result };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateSupplier({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM suppliers WHERE supid = $1`;
        let params = [data.id];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const Supplier = model.SupplierModel;
          const result = await Supplier.update(
            {
              supName: data.supName,
              supContact: data.supContact,
              supAddress: data.supAddress,
              supStatus: data.supStatus,
            },
            {
              where: { supid: data.id },
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

  async function removeSupplier({ id }) {
    try {
      // use sequelize on inserting
      const Supplier = model.SupplierModel;
      const res = await Supplier.destroy({
        where: {
          supid: id,
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
        const sql = `SELECT * FROM suppliers WHERE "supName" = $1`;
        let params = [data.supName];

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

module.exports = { supplierQuery };
