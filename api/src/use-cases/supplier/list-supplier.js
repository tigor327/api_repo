const listSuppliers = ({ suppliersDb }) => {
  return async function list() {
    let supplierList = [];
    const result = await suppliersDb.getAllSuppliers({});
    if (result.rowCount > 0) {
      const suppliers = result.rows;
      suppliers.map((supplier) => supplierList.push(supplier));
    }


    

    return supplierList;
  };
};

module.exports = listSuppliers;
