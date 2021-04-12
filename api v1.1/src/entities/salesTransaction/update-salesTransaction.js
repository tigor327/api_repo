const isValidName = require("../../helper/isValidName");

const updateSalesTransaction = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})
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

  const custid = info[0].salesDetails[0].custid;
  const items = info[1];
  const totalPrice = info[0].salesDetails[1].grandTotal;

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
