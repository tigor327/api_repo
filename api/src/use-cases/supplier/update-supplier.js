const updateSupplier = ({ suppliersDb, updateSupplier_ENTITY }) => {
  return async function add(info) {
    let data = await updateSupplier_ENTITY({ info });
    //console.log(info);
    data = {
      supName: info.supName,
      supContact: info.supContact,
      supAddress: info.supAddress,
      supStatus: info.supStatus,
      id: info.id,
    };

    const res = await suppliersDb.updateSupplier({ data });

    let prompt = res
      ? "Supplier updated succesfully!"
      : "Failed to update supplier.";
    console.log("RESULT SENT TO FRONT res: ", res);

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateSupplier;
