const {
  getAllSalesTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
} = require("../../controllers/salesTransaction/index");

const salesTransactionRoutes = ({
  salesTransactionRouter,
  makeExpressCallback,
}) => {
  salesTransactionRouter.get(
    "/",
    makeExpressCallback(getAllSalesTransactionsController)
  );
  salesTransactionRouter.post(
    "/",
    makeExpressCallback(registerSalesTransactionController)
  );
  salesTransactionRouter.delete(
    "/:id",
    makeExpressCallback(removeSalesTransactionController)
  );

  return salesTransactionRouter;
};

module.exports = salesTransactionRoutes;
