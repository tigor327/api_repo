const registerItem = ({ itemsDb, makeItem_ENTITY }) => {
  return async function add(info) {
    let data = await makeItem_ENTITY({ info });

    // data = {
    //   itemName: data.name,
    //   itemBarcode: data.barcode,
    //   userid: data.supid,
    //   itemPrice: data.price,
    //   itemQuantity: data.quantity,
    //   itemStatus: data.itemStatus,
    //   itemDescription: data.description,
    // };
    const dupeCheck = await itemsDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }
    const dupeCheckBarCode = await itemsDb.checkDupeBarCode({ data });
    if (dupeCheckBarCode.rowCount > 0) {
      throw new Error("barcode already exists");
    }

    const res = await itemsDb.addItem({ data });

    let prompt = res
      ? "Item registered succesfully!"
      : "Failed to register item.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = registerItem;
