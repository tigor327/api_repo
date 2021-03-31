const {
    makeDelivery_ENTITY
} = require('../../entities/delivery/index')

const deliveryDb = require('../../db-access/delivery/index')

const getDeliveries = require('./get-deliveries')
const addDelivery = require('./add-delivery')

const getDeliveriesUseCase = getDeliveries({deliveryDb})
const addDeliveryUseCase = addDelivery({makeDelivery_ENTITY, deliveryDb})

const services = Object.freeze({
    getDeliveriesUseCase,
    addDeliveryUseCase
})

module.exports = services
module.exports = {
    getDeliveriesUseCase,
    addDeliveryUseCase
}