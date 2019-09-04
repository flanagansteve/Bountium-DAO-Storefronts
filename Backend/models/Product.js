const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        type: Number 
    },
    bizName: {
        type: String
    },
    price: {
        type: Number
    },
    name: {
        type: String  
    },
    description: {
        type: String   
    },
    imageURL: {
        type: String 
    },
    forSale: {
        type: Boolean   
    },
    ordersReceived: {
        type: Number    
    },
    orderOptions: {
        type: String    
    },
    storeAddress: {
        type: String   
    }
})

module.exports = mongoose.model('product', ProductSchema);