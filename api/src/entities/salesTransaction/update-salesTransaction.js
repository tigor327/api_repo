const isValidName = require("../../helper/isValidName");

const updateSalesTransaction = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();
  console.log("CONSOLE LOG FROM UPDATESALESTRANSACTION IN ENTITIES: ", info);
  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  const custid = info[0].customer[0].custid;
  const items = info[1];
  const totalPrice = info[2].transactionTotal[0].totalPrice;

  if (!custid) {
    custid = 100;
  }

  if (!items) {
    throw new Error("Invalid chars aren't allowed as name");
  }
  if (!totalPrice) {
    throw new Error("Invalid chars aren't allowed as name");
  }

  return Object.freeze({
    custid: () => custid,
    total: () => total,
    items: () => items,
    dateAndTime: () => dateAndTime,
  });
};

module.exports = updateSalesTransaction;
