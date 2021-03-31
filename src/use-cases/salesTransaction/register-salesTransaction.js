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
    const custid = info[0].customer[0].custid;
    const items = info[1];
    const totalPrice = info[2].transactionTotal[0].totalPrice;
    console.log("LOG FROM USECASES-SALESTRANSACTION-REGISTER: ", items);
    data = {
      custid: custid,
      totalPrice: totalPrice,
      items: items,
      dateAndTime: dateAndTime,
    };
    const dupeCheck = await salesTransactionsDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

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
