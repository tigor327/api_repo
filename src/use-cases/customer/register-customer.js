const registerCustomer = ({ customersDb, makeCustomer_ENTITY }) => {
  return async function add(info) {
    let data = await makeCustomer_ENTITY({ info });

    data = {
      custName: data.custName(),
      custContact: data.custContact(),
      custAddress: data.custAddress(),
      custStatus: data.custStatus(),
    };
    const dupeCheck = await customersDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await customersDb.addCustomer({ data });

    let prompt = res
      ? "Customer registered succesfully!"
      : "Failed to register customer.";
    console.log("resultttttsststststs", res.result);
    return {
      message: prompt,
      result: res.result,
    };
  };
};

module.exports = registerCustomer;
