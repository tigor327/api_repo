//const isValidName = require("../../helper/isValidName");

const makeDeliveryTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  console.log(info[0].deliveryDetails[0].supid);
  const supid = info[0].deliveryDetails[0].supid;
  const deliveryDate = info[0].deliveryDetails[1].deliveryDate;
  const items = info[1];
  const totalPrice = info[0].deliveryDetails[2].grandTotal;
  //const { custid, totalPrice, items } = info;

  if (!supid) {
    throw new Error("Please enter full name");
  }
  if (!totalPrice) {
    throw new Error("Please enter contact information");
  }
  if (!items) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    supid: () => supid,
    totalPrice: () => totalPrice,
    items: () => items,
    dateAndTime: () => dateAndTime,
    deliveryDate: () => deliveryDate,
  });
  // }
};
//custid, totalPrice, items

module.exports = makeDeliveryTransaction;
