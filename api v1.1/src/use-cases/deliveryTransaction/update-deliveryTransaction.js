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

    const deliveryDate = info[0].deliveryDetails[1].deliveryDate;
    const supid = info[0].deliveryDetails[0].supid;
    const items = info[1];
    const totalPrice = info[0].deliveryDetails[2].grandTotal;
    const id = info.id;
    data = {
      supid: supid,
      totalPrice: totalPrice,
      items: items,
      dateAndTime: dateAndTime,
      deliveryDate: deliveryDate,
      id: id,
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
