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
    const dupeCheck = await itemsDb.checkDupe({ data });

    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await itemsDb.updateItem({ data });
    let prompt = "";
    console.log("res count result: ", res.res);
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
