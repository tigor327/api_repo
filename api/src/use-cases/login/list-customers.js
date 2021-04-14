const listCustomers = ({ customersDb }) => {
  return async function list() {
    let customerList = [];
    const result = await customersDb.getAllCustomers({});
    if (result.rowCount > 0) {
      const customers = result.rows;
      customers.map((customer) => customerList.push(customer));
    }

    return customerList;
  };
};

module.exports = listCustomers;
