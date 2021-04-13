const updateDeliveryTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  console.log(
    "ENTITIES EEEEEWWWWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ",
    info
  );
  const supName = info.supName;
  const deliveryDate = info.deliveryDate;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  //const { custid, totalPrice, items } = info;

  if (!supName) {
    throw new Error("Please enter full name");
  }
  if (!totalPrice) {
    throw new Error("Please enter contact information");
  }
  if (!items) {
    throw new Error("Please enter address");
  }
  if (!deliveryDate) {
    throw new Error("Please enter deliveryDate");
  }

  return Object.freeze({
    supName: () => supName,
    totalPrice: () => totalPrice,
    items: () => items,
    dateAndTime: () => dateAndTime,
    deliveryDate: () => deliveryDate,
  });

  // const { custName, custContact, custAddress, id } = info;
  // const fname = isValidName(custName);
  // const custStatus = "Inactive";

  // if (!id) {
  //   throw new Error("Invalid transaction id");
  // }
  // if (!custName) {
  //   throw new Error("Please enter full name");
  // }
  // if (!custContact || custContact.trim().length === 0) {
  //   throw new Error("Please enter contact information");
  // }
  // if (!custAddress || custAddress.trim().length === 0) {
  //   throw new Error("Please enter address");
  // }
  // if (!fname) {
  //   throw new Error("Invalid chars aren't allowed as name");
  // }

  // return Object.freeze({
  //   deliveryTransactionsId: () => deliveryTransactionsId,
  //   supid: () => supid,
  //   date: () => date,
  //   grandTotal: () => grandTotal,
  // });
};

module.exports = updateDeliveryTransaction;
