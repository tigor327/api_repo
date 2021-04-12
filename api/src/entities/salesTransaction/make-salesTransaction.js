const isValidName = require("../../helper/isValidName");

const makeSalesTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  console.log("SALES DETAILS ERROR INFO SENT: ", info);
  if (!info) {
    throw new Error("Missing inputs or Incorect Format");
  }
  if (info.itemsList.length < 1) {
    throw new Error("Missing inputs or Incorect Format");
  }
  var custName = info.custName;
  const items = info.itemsList;
  const transactionTotal = info.grandTotal;
  //const { custid, transactionTotal, items } = info;

  if (!custName) {
    custid = 1;
  }
  if (!transactionTotal) {
    throw new Error("Please enter grand total.");
  }
  if (!items) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    custid: () => custid,
    transactionTotal: () => transactionTotal,
    items: () => items,
    dateAndTime: () => dateAndTime,
  });
  // }
};
//custid, totalPrice, items

module.exports = makeSalesTransaction;
