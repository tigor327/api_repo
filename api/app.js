require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const customerRoute = require("./src/routes/customers/index");
const supplierRoute = require("./src/routes/suppliers/index");
const itemRoute = require("./src/routes/items/index");
const salesTransactionRoute = require("./src/routes/salesTransactions/index");
const deliveryTransactionRoute = require("./src/routes/deliveryTransactions/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use("/customers/list", customerRoute);
app.use("/suppliers/list", supplierRoute);
app.use("/items/list", itemRoute);
app.use("/transaction/sales", salesTransactionRoute);
app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);
// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

// app.use("/customers/list", customerRoute);
// app.use("/suppliers/list", supplierRoute);
// app.use("/items/list", itemRoute);
// app.use("/transaction/sales", salesTransactionRoute);
// app.use("/transaction/delivery", deliveryTransactionRoute);

app.use(async (req, res) => {
  res.status(404).send("Route unavailable.");
});
