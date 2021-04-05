const updateItem = ({ itemsDb, updateItem_ENTITY }) => {
  return async function add(info) {
    let data = await updateItem_ENTITY({ info });

    data = {
      name: info.name,
      barcode: info.barcode,
      description: info.description,
      supplier: info.supplier,
      price: info.price,
      quantity: info.quantity,
      itemStatus: info.itemStatus,
      id: info.id,
    };

    const res = await itemsDb.updateItem({ data });
    let prompt = "";
    if (res.res == 1) {
      prompt = "Item updated succesfully!";
    } else {
      prompt = "Failed to update item.";
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateItem;
