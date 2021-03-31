const makeCustomer_ENTITY = require('./make-itemSales')
const updateCustomer_ENTITY = require('./update-sales')

const services = Object.freeze({makeCustomer_ENTITY, updateCustomer_ENTITY})

module.exports = services
module.exports = { makeCustomer_ENTITY, updateCustomer_ENTITY }