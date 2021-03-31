const listSalesTransactions = ({ salesTransactionsDb }) => {
  return async function list() {
    let salesTransactionList = [];
    const result = await salesTransactionsDb.getAllSalesTransactions({});
    console.log(result.rows);
    if (result.rowCount > 0) {
      const salesTransactions = result.rows;
      salesTransactions.map((salesTransaction) =>
        salesTransactionList.push(salesTransaction)
      );
    }

    return salesTransactionList;
  };
};

module.exports = listSalesTransactions;
