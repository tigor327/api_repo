const db = require('../../config/sequelize')
const { DataTypes } = require('sequelize')

const CustomerModel = db.define('customer',{
    custid: {type: DataTypes.INTEGER, primaryKey: true},
    custName: {type: DataTypes.STRING},
    custContact: {type: DataTypes.STRING},
    custAddress: {type: DataTypes.STRING},
    custStatus: {type: DataTypes.STRING}},
    {freezeTableName: true, 
    timestamps:false,
    tableName: 'customers'}
)

module.exports = {
    CustomerModel
}