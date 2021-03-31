const listItems = ({ itemsDb }) => {
  return async function list() {
    let itemList = [];
    const result = await itemsDb.getAllItems({});
    console.log(result.rows);
    if (result.rowCount > 0) {
      const items = result.rows;
      items.map((item) => itemList.push(item));
    }

    return itemList;
  };
};

module.exports = listItems;
