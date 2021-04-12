//const isValidName = require("../../helper/isValidName");

const makeDeliveryTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  if (!info) {
    throw new Error(
      "please send JSON as [{'deliveryDetails': [{'supid': #}, {'deliveryDate': 'mm-dd-yyy'}, {'grandTotal': #}]}, {'items': [{'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #},...]}]"
    );
  }
  if (!info.itemsList) {
    throw new Error(
      "please send JSON as [{'deliveryDetails': [{'supid': #}, {'deliveryDate': 'mm-dd-yyy'}, {'grandTotal': #}]}, {'items': [{'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #}, {'id':#,'quantity':#, 'subTotal': #},...]}]"
    );
  }
  var supName = info.supName;
  const deliveryDate = info.deliveryDate;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  //const { custid, totalPrice, items } = info;
  console.log(
    "INFO FROM ENTITIES/DELIVERYTRANSACTION/MAKEDELIVERYTRANSACTION: ",
    info.itemsList
  );

  if (!supName) {
    supName = 1;
  }
  if (!totalPrice) {
    throw new Error("Please enter contact information");
  }
  if (!items) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    supName: () => supName,
    totalPrice: () => totalPrice,
    items: () => items,
    dateAndTime: () => dateAndTime,
    deliveryDate: () => deliveryDate,
  });
  // }
};
//custid, totalPrice, items

module.exports = makeDeliveryTransaction;
