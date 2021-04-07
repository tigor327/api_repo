const listItems = ({ itemsDb }) => {
  return async function list() {
    let itemList = [];
    const result = await itemsDb.getAllItems({});
    if (result.rowCount > 0) {
      const items = result.rows;
      items.map((item) => itemList.push(item));
    }
    console.log(
      "this log is brought to you by Backend from use-case/item/list-item"
    );
    return itemList;
  };
};

module.exports = listItems;
