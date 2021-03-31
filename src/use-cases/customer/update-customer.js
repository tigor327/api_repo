const updateCustomer = ({ customersDb, updateCustomer_ENTITY }) => {
  return async function add(info) {
    let data = await updateCustomer_ENTITY({ info });

    data = {
      custName: info.custName,
      custContact: info.custContact,
      custAddress: info.custAddress,
      custStatus: info.custStatus,
      id: info.id,
    };

    const res = await customersDb.updateCustomer({ data });

    let prompt = res
      ? "Customer updated succesfully!"
      : "Failed to update customer.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateCustomer;
