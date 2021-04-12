const listDeliveryTransactions = ({ deliveryTransactionsDb }) => {
  return async function list() {
    let deliveryTransactionList = [];
    const result = await deliveryTransactionsDb.getAllDeliveryTransactions({});
    const results = result.rows;

    for (var i = 0; i < result.rowCount; i++) {
      var row = results[i];
      var id = row.deliveryTransactionId;
      var itemsList = await deliveryTransactionsDb.getAllDeliveryByIdTransactions(
        {
          id,
        }
      );
      var itemsListRows = itemsList.rows;

      deliveryTransactionList.push({
        supid: row.supid,
        date: row.date,
        grandTotal: row.grandTotal,
        deliveryTransactionId: row.deliveryTransactionId,
        supName: row.supName,
        supContact: row.supContact,
        supAddress: row.supAddress,
        supStatus: row.supStatus,
        itemsListRows,
      });
    }

    return deliveryTransactionList;
  };
};

module.exports = listDeliveryTransactions;
