const isValidName = require("../../helper/isValidName");

const updateCustomer = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})

  const { custName, custContact, custAddress, custStatus, id } = info;
  const fname = isValidName(custName);
  if (!id) {
    throw new Error("Invalid customer id");
  }
  if (!custStatus) {
    custStatus = "Active";
  }
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
  console.log(
    "ENTITIES------------------------------------: ",
    custName,
    custContact,
    custAddress,
    custStatus,
    id
  );

  return Object.freeze({
    userName: () => custName,
    userContact: () => custContact,
    userAddress: () => custAddress,
    userStatus: () => custStatus,
  });
};

module.exports = updateCustomer;
