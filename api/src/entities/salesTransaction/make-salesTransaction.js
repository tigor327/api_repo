const isValidName = require("../../helper/isValidName");

const makeSalesTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  const custid = info[0].customer[0].custid;
  const items = info[1];
  const totalPrice = info[2].transactionTotal[0].totalPrice;
  //const { custid, totalPrice, items } = info;

  if (!custid) {
    throw new Error("Please enter full name");
  }
  if (!totalPrice) {
    throw new Error("Please enter contact information");
  }
  if (!items) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    custid: () => custid,
    totalPrice: () => totalPrice,
    items: () => items,
    dateAndTime: () => dateAndTime,
  });
  // }
};
//custid, totalPrice, items

module.exports = makeSalesTransaction;
