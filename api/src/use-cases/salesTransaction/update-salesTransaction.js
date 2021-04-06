const updateSalesTransaction = ({
  salesTransactionsDb,
  updateSalesTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;

    let data = await updateSalesTransaction_ENTITY({ info });
    data = {
      custid: info[0].customer[0].custid,
      items: info[1],
      transactionTotal: info[2].transactionTotal[0].totalPrice,
      dateAndTime: dateAndTime,
      id: info.id,
    };
    const dupeCheck = await salesTransactionsDb.checkDupe({ data });

    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await salesTransactionsDb.updateSalesTransaction({ data });
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

module.exports = updateSalesTransaction;
