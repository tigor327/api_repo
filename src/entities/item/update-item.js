const updateItem_ENTITY = ({ info }) => {
  // return function make({itemName, subDescription, barcode, quantity, costPerUnit, supplierId} = {}) {

  const {
    name,
    barcode,
    description,
    supid,
    price,
    quantity,
    itemStatus,
    id,
  } = info;
  if (!id) {
    throw new Error("please provide id");
  }
  if (!name) {
    throw new Error("Item name can't be blank!");
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
  if (quantity === 0) {
    throw new Error("Item quantity can't be zero!");
  }
  if (!itemStatus) {
    throw new Error("Provide item status");
  }
  return Object.freeze({
    id: () => id,
    name: () => name,
    barcode: () => barcode,
    description: () => description,
    supid: () => supid,
    price: () => price,
    quantity: () => quantity,
    itemStatus: () => itemStatus,
  });
  // }
};

module.exports = updateItem_ENTITY;
