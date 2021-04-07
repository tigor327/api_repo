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
      custid: info[0].salesDetails[0].custid,
      items: info[1],
      transactionTotal: info[0].salesDetails[1].grandTotal,
      dateAndTime: dateAndTime,
      id: info.id,
    };

    const res = await salesTransactionsDb.updateSalesTransaction({ data });
    let prompt = "";
    console.log("res count result: ", res.finalResult.length);
    if (res.finalResult.length >= 2) {
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
