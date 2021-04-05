const {
  getAllDeliveryTransactionsController,
  registerDeliveryTransactionController,
  removeDeliveryTransactionController,
} = require("../../controllers/deliveryTransaction/index");

const deliveryTransactionRoutes = ({
  deliveryTransactionRouter,
  makeExpressCallback,
}) => {
  deliveryTransactionRouter.get(
    "/",
    makeExpressCallback(getAllDeliveryTransactionsController)
  );
  deliveryTransactionRouter.post(
    "/",
    makeExpressCallback(registerDeliveryTransactionController)
  );
  deliveryTransactionRouter.delete(
    "/:id",
    makeExpressCallback(removeDeliveryTransactionController)
  );

  return deliveryTransactionRouter;
};

module.exports = deliveryTransactionRoutes;
