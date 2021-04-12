const makeItem = ({ info }) => {
  // return function make({itemName, subDescription, barcode, quantity, costPerUnit, supplierId} = {}) {

  const { name, barcode, description, supid, price, quantity } = info;
  var itemStatus1 = info.itemStatus;

  if (!name) {
    throw new Error("Item name can't be blank!");
  }
  if (!itemStatus1) {
    itemStatus1 = "Inactive";
  }
  if (!barcode) {
    throw new Error("Provide an item barcode.");
  }
  if (!description) {
    throw new Error("Provide an item description");
  }
  if (!supid) {
    throw new Error("Item supplier id can't be blank!");
  }
  if (!price) {
    throw new Error("Item price can't be blank!");
  }
  if (isNaN(price)) {
    throw new Error("Item price has to be a number!");
  }
  if (quantity === 0) {
    throw new Error("Item quantity can't be zero!");
  }

  return Object.freeze({
    itemName: name,
    itemBarcode: barcode,
    itemDescription: description,
    userId: supid,
    itemPrice: price,
    itemQuantity: quantity,
    itemStatus: itemStatus1,
  });
  // }
};
module.exports = makeItem;
