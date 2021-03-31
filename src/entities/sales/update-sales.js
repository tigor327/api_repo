const isValidName = require("../../helper/isValidName");

const updateSales = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})

  const { Name, Contact, Address, id } = info;
  const fname = isValidName(Name);
  const Status = "Inactive";

  if (!id) {
    throw new Error("Invalid omer id");
  }
  if (!Name) {
    throw new Error("Please enter full name");
  }
  if (!Contact || Contact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!Address || Address.trim().length === 0) {
    throw new Error("Please enter address");
  }
  if (!fname) {
    throw new Error("Invalid chars aren't allowed as name");
  }

  return Object.freeze({
    Name: () => Name,
    Contact: () => Contact,
    Address: () => Address,
    Status: () => Status,
  });
};

module.exports = updateSales;
