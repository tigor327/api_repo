const { supplierQuery } = require("../../data-access/suppliers/query");

const updateDeliveryTransactions = ({
  deliveryTransactionsDb,
  updateDeliveryTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await updateDeliveryTransaction_ENTITY({ info });

    data = {
      supid: info[0].supplier[0].supid,
      items: info[1],
      transactionTotal: info[2].transactionTotal[0].totalPrice,
      dateAndTime: dateAndTime,
      id: info.id,
    };

    const res = await deliveryTransactionsDb.updateDeliveryTransaction({
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
