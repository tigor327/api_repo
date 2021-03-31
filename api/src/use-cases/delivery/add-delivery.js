const addDelivery = ({makeDelivery_ENTITY, deliveryDb}) => {
    return async function add (info) {
        console.log(info)

        let delivery = await makeDelivery_ENTITY(info)
        
        delivery = {
            dateAndTime: delivery.getDateTime(),
            productID: delivery.getProductID(),
            quantity: delivery.getQuantity(),
            costPerUnit: delivery.getCost(),
        }

        console.log("Delivery: ",delivery)

        const res = await deliveryDb.addDelivery(delivery)

        let prompt = `Failed to create a delivery entry.`
        if (res) prompt = 'Succesfully added delivery entry'

        return {
            message: prompt,
            delivery: res
        }
    }
}

module.exports = addDelivery