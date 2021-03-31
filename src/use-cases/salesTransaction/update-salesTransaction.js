const updateSalesTransactions = ({
  salesTransactionsDb,
  updateSalesTransactions_ENTITY,
}) => {
  return async function add(info) {
    let data = await updateSalesTransactions_ENTITY({ info });

    data = {
      name: info.name,
      barcode: info.barcode,
      description: info.description,
      supplier: info.supplier,
      price: info.price,
      quantity: info.quantity,
      salesTransactionStatus: info.salesTransactionStatus,
      id: info.id,
    };
    const dupeCheck = await salesTransactionsDb.checkDupe({ data });

    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await salesTransactionsDb.updateSalesTransactions({ data });
    let prompt = "";
    console.log("res count result: ", res.res);
    if (res.res == 1) {
      prompt = "SalesTransactions updated succesfully!";
    } else {
      prompt = "Failed to update salesTransaction.";
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateSalesTransactions;
