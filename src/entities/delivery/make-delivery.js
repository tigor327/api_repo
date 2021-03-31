const makeDelivery_ENTITY = (info) => {
  // let today = new Date()
  // let month = today.getMonth()+1
  // let year = today.getFullYear()
  // let day = today.getDate()

  // let hour = today.getHours()
  // let min = (today.getMinutes() < 10) ? '0' : ''+today.getMinutes()

  // let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`

  const { dateAndTime, productID, quantity, costPerUnit } = info;

  if (!productID) {
    throw new Error("Provie a product id");
  }
  if (!quantity) {
    throw new Error("Provide a product quantity");
  }
  if (quantity === 0) {
    throw new Error("Product quantity can't be zero!");
  }
  if (!costPerUnit) {
    throw new Error("Product price can't be blank!");
  }

  return Object.freeze({
    getDateTime: () => dateAndTime,
    getProductID: () => productID,
    getQuantity: () => quantity,
    getCost: () => costPerUnit,
  });
};

module.exports = makeDelivery_ENTITY;
