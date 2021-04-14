const { makeLogin_ENTITY } = require("../../entities/login/index");

const customersDb = require("../../data-access/login/index");

const login = require("./register-customer");

const loginUseCase = login({
  customersDb,
  makeLogin_ENTITY,
});

const services = Object.freeze({
  loginUseCase,
});

module.exports = services;
module.exports = {
  loginUseCase,
};
