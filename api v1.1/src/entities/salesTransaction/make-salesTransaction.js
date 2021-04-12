const isValidName = require("../../helper/isValidName");

const makeSalesTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  if (!info[0].salesDetails) {
    throw new Error(
      "please send JSON as [{'salesDetails': [{'custid': #}, {'grandTotal': #}]}, {'items': [{'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #},...]}]"
    );
  }
  if (!info[1].items) {
    throw new Error(
      "please send JSON as [{'salesDetails': [{'custid': #}, {'grandTotal': #}]}, {'items': [{'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #},...]}]"
    );
  }
  var custid = info[0].salesDetails[0].custid;
  const items = info[1];
  const transactionTotal = info[0].salesDetails[1].grandTotal;
  //const { custid, transactionTotal, items } = info;
  console.log(
    "ENTITIES VALIDATION OF SALESTRANSACTION: ",
    info[0].salesDetails[0].custid
  );
  if (!custid) {
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
