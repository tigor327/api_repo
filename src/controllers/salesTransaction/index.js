const {
  listSalesTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
} = require("../../use-cases/salesTransaction/index");

const getAllSalesTransactions = require("./get-all-salesTransactions");
const registerSalesTransactions = require("./register-salesTransaction");
const removeSalesTransactionById = require("./remove-salesTransaction");
const updateSalesTransactionById = require("./update-salesTransaction");
//console.log("passed through index salesTransaction controller");
const getAllSalesTransactionsController = getAllSalesTransactions({
  listSalesTransactionUseCase,
});
const registerSalesTransactionController = registerSalesTransactions({
  registerSalesTransactionUseCase,
});
const removeSalesTransactionController = removeSalesTransactionById({
  removeSalesTransactionUseCase,
});
const updateSalesTransactionController = updateSalesTransactionById({
  updateSalesTransactionUseCase,
});

const services = Object.freeze({
  getAllSalesTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
  updateSalesTransactionController,
});

module.exports = services;
module.exports = {
  getAllSalesTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
  updateSalesTransactionController,
};
