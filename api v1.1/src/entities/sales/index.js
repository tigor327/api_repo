const makeSales_ENTITY = require("./make-itemSales");
const updateSales_ENTITY = require("./update-sales");

const services = Object.freeze({ makeSales_ENTITY, updateSales_ENTITY });

module.exports = services;
module.exports = { makeSales_ENTITY, updateSales_ENTITY };
