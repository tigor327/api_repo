const makeLogin = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { userName, password } = info;
  console.log(info);

  if (!userName || Contact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!password || Address.trim().length === 0) {
    throw new Error("Please enter address");
  }

  return Object.freeze({
    //item id foreign key
    userName: () => Contact,
    password: () => Address,
  });
  // }
};

module.exports = makeLogin;
