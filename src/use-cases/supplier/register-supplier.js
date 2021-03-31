const registerSupplier = ({ suppliersDb, makeSupplier_ENTITY }) => {
  return async function add(info) {
    let data = await makeSupplier_ENTITY({ info });

    data = {
      supName: data.supName(),
      supContact: data.supContact(),
      supAddress: data.supAddress(),
      supStatus: data.supStatus(),
    };
    const dupeCheck = await suppliersDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await suppliersDb.addSupplier({ data });

    let prompt = res
      ? "Supplier registered succesfully!"
      : "Failed to register supplier.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = registerSupplier;
