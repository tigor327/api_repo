const makeSalesTransaction = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { custid, itemSalesId, salesTransactionId } = info;
  console.log(info);
  let date = new Date();
  if (!id) {
    throw new Error("Please enter full name");
  }
  if (!quantity || Contact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!salesTransactionId || Address.trim().length === 0) {
    throw new Error("Please enter address");
  }

  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateTime = `${month}-${day}-${year} ${hour}:${min}`;

  return Object.freeze({
    //item id foreign key
    custid: () => custid,
    date: () => dateTime,
  });
  // }
};

module.exports = makeSalesTransaction;
