const updateItem = ({ itemsDb, updateItem_ENTITY }) => {
  return async function add(info) {
    let data = await updateItem_ENTITY({ info });

    data = {
      name: info.name,
      barcode: info.barcode,
      description: info.description,
      supName: info.supName,
      price: info.price,
      quantity: info.quantity,
      itemStatus: info.itemStatus,
      id: info.id,
    };

    const res = await itemsDb.updateItem({ data });
    console.log("response to front end: ", res);
    let prompt = "";
    if (res) {
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
