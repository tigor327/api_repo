const listSalesTransactions = ({ salesTransactionsDb }) => {
  return async function list() {
    let salesTransactionList = [];
    const result = await salesTransactionsDb.getAllSalesTransactions({});
    const results = result.rows;
    for (var i = 0; i < result.rowCount; i++) {
      var row = results[i];
      var id = row.salesTransactionId;
      var itemsList = await salesTransactionsDb.getAllSalesByIdTransactions({
        id,
      });
      itemsListRows = itemsList.rows;
      salesTransactionList.push({
        custid: row.custid,
        date: row.date,
        deliveryDate: row.deliveryDate,
        grandTotal: row.grandTotal,
        salesTransactionId: row.salesTransactionId,
        custName: row.custName,
        custContact: row.custContact,
        custAddress: row.custAddress,
        custStatus: row.custStatus,
        itemsListRows,
      });
    }

    return salesTransactionList;
  };
};

module.exports = listSalesTransactions;
