const registerSalesTransaction = ({
  salesTransactionsDb,
  makeSalesTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await makeSalesTransaction_ENTITY({ info });
    const custid = info[0].salesDetails[0].custid;
    const items = info[1];
    const transactionTotal = info[0].salesDetails[1].grandTotal;
    console.log(
      "LOG FROM USECASES-SALESTRANSACTION-REGISTER: ",
      info[0].salesDetails[0]
    );
    data = {
      custid: custid,
      transactionTotal: transactionTotal,
      items: items,
      dateAndTime: dateAndTime,
    };

    const res = await salesTransactionsDb.addSalesTransaction({ data });

    let prompt = res
      ? "SalesTransaction registered succesfully!"
      : "Failed to register salesTransaction.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = registerSalesTransaction;
