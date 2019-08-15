const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    forSale: {
        type: Boolean,
        required: true
    },
    ordersReceived: {
        type: Number,
        required: true
    },
    supplyChainLength: {
        type: Number,
        required: true
    },
    storeAddress: {
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('product', ProductSchema);