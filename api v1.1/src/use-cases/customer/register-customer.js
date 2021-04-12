const registerCustomer = ({ customersDb, makeCustomer_ENTITY }) => {
  return async function add(info) {
    let data = await makeCustomer_ENTITY({ info });

    data = {
      userName: data.userName(),
      userContact: data.userContact(),
      userAddress: data.userAddress(),
      userStatus: data.userStatus(),
    };
    const dupeCheck = await customersDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await customersDb.addCustomer({ data });

    let prompt = res
      ? "Customer registered succesfully!"
      : "Failed to register customer.";
    return {
      message: prompt,
      result: res.result,
    };
  };
};

module.exports = registerCustomer;
