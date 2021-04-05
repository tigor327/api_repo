const listDeliveryTransactions = ({ deliveryTransactionsDb }) => {
  return async function list() {
    let deliveryTransactionList = [];
    const result = await deliveryTransactionsDb.getAllDeliveryTransactions({});
    //console.log(result.rows);
    if (result.rowCount > 0) {
      const deliveryTransactions = result.rows;
      deliveryTransactions.map((deliveryTransaction) =>
        deliveryTransactionList.push(deliveryTransaction)
      );
    }

    return deliveryTransactionList;
  };
};

module.exports = listDeliveryTransactions;
