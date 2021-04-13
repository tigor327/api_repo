const listDeliveryTransactions = ({ deliveryTransactionsDb }) => {
  return async function list() {
    let deliveryTransactionList = [];
    let transaction = [];

    const result = await deliveryTransactionsDb.getAllDeliveryTransactions({});
    const results = result.rows;

    for (var i = 0; i < result.rowCount; i++) {
      var row = results[i];
      var id = row.deliveryTransactionId;
      let items = [];
      var itemsList = await deliveryTransactionsDb.getAllDeliveryByIdTransactions(
        {
          id,
        }
      );
      var itemsListRows = itemsList.rows;
      items.push(itemsListRows);

      transaction.push({
        supid: row.supid,
        date: row.date,
        grandTotal: row.grandTotal,
        deliveryTransactionId: row.deliveryTransactionId,
        deliveryDate: row.deliveryDate,
        supName: row.supName,
        supContact: row.supContact,
        supAddress: row.supAddress,
        supStatus: row.supStatus,
        itemsListRows,
      });

      //transaction.push(itemsListRows);
      deliveryTransactionList.push(transaction);
    }

    return transaction;
  };
};

module.exports = listDeliveryTransactions;
