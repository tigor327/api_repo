const {
  makeSalesTransaction_ENTITY,
  updateSalesTransaction_ENTITY,
} = require("../../entities/salesTransaction/index");

const salesTransactionsDb = require("../../data-access/salesTransactions/index");

const listSalesTransactions = require("./list-salesTransaction");
const registerSalesTransaction = require("./register-salesTransaction");
const removeSalesTransaction = require("./remove-salesTransaction");
const updateSalesTransaction = require("./update-salesTransaction");

const listSalesTransactionUseCase = listSalesTransactions({
  salesTransactionsDb,
});
const registerSalesTransactionUseCase = registerSalesTransaction({
  salesTransactionsDb,
  makeSalesTransaction_ENTITY,
});
const removeSalesTransactionUseCase = removeSalesTransaction({
  salesTransactionsDb,
});
const updateSalesTransactionUseCase = updateSalesTransaction({
  salesTransactionsDb,
  updateSalesTransaction_ENTITY,
});

const services = Object.freeze({
  listSalesTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
});

module.exports = services;
module.exports = {
  listSalesTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
};
