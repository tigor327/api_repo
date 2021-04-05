const updateDeliveryTransactions = ({
  deliveryTransactionsDb,
  updateDeliveryTransactions_ENTITY,
}) => {
  return async function add(info) {
    let data = await updateDeliveryTransactions_ENTITY({ info });

    data = {
      name: info.name,
      barcode: info.barcode,
      description: info.description,
      supplier: info.supplier,
      price: info.price,
      quantity: info.quantity,
      deliveryTransactionStatus: info.deliveryTransactionStatus,
      id: info.id,
    };
    const dupeCheck = await deliveryTransactionsDb.checkDupe({ data });

    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await deliveryTransactionsDb.updateDeliveryTransactions({
      data,
    });
    let prompt = "";
    console.log("res count result: ", res.res);
    if (res.res == 1) {
      prompt = "DeliveryTransactions updated succesfully!";
    } else {
      prompt = "Failed to update deliveryTransaction.";
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateDeliveryTransactions;
