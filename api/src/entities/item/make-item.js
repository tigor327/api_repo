const makeItem = ({ info }) => {
  // return function make({itemName, subDescription, barcode, quantity, costPerUnit, supplierId} = {}) {

  const { name, barcode, description, supName, price } = info;
  var itemStatus = info.itemStatus;
  var quantity = info.quantity;
  if (!name) {
    throw new Error("Item name can't be blank!");
  }
  if (!itemStatus) {
    itemStatus = "Inactive";
  }
  if (!barcode) {
    throw new Error("Provide an item barcode.");
  }
  if (!description) {
    throw new Error("Provide an item description");
  }
  if (!supName) {
    throw new Error("Item supplier Name can't be blank!");
  }

  if (!quantity) {
    quantity = 0;
  }
  if (isNaN(quantity)) {
    throw new Error("Quantity has to be a number!");
  }

  if (!price) {
    throw new Error("Item price can't be blank!");
  }
  if (isNaN(price)) {
    throw new Error("Item price has to be a number!");
  }

  return Object.freeze({
    name: name,
    barcode: barcode,
    description: description,
    supName: supName,
    price: price,
    quantity: quantity,
    itemStatus: itemStatus,
  });
  // }
};

module.exports = makeItem;
