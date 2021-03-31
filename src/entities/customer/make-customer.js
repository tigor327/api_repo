const isValidName = require("../../helper/isValidName");

const makeCustomer = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { custName, custContact, custAddress } = info;
  const fname = isValidName(custName);
  const custStatus = "Inactive";
  console.log(info);

  if (!custName) {
    throw new Error("Please enter full name");
  }
  if (!custContact || custContact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!custAddress || custAddress.trim().length === 0) {
    throw new Error("Please enter address");
  }
  if (!fname) {
    throw new Error("Invalid chars aren't allowed as name");
  }

  return Object.freeze({
    custName: () => custName,
    custContact: () => custContact,
    custAddress: () => custAddress,
    custStatus: () => custStatus,
  });
  // }
};

module.exports = makeCustomer;
