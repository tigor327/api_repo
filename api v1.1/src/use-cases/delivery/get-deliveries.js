const getDeliveries = ({deliveryDb}) => {
    return async function get(info) {

        let data = []

        const result = await deliveryDb.getAllDeliveries({})
        
        if (result.rowCount > 0) {
            const items = result.rows
            items.map((item)=> data.push(item))
        }
        return data
    }
}

module.exports = getDeliveries