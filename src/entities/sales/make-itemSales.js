

const makeSales = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { id, quantity, salesTransactionId } = info;
  console.log(info);

  if (!id) {
    throw new Error("Please enter full name");
  }
  if (!quantity || Contact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!salesTransactionId || Address.trim().length === 0) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    //item id foreign key
    id: () => id,
    quantity: () => Contact,
    salesTransactionId: () => Address,
  });
  // }
};

module.exports = makeSales;
