const {
  getAllSalesTransactionsController,
  registerSalesTransactionController,
  updateSalesTransactionController,
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
  salesTransactionRouter.patch(
    "/:id",
    makeExpressCallback(updateSalesTransactionController)
  );
  salesTransactionRouter.delete(
    "/:id",
    makeExpressCallback(removeSalesTransactionController)
  );

  return salesTransactionRouter;
};

module.exports = salesTransactionRoutes;
