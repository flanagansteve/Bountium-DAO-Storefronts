const mongoose = require("mongoose");
const web3 = require("./web3");
const ABI_Product = require("./ABI");

const {
    mongoURI,
} = require("../config");

const stores = [
    "0x4dba8f8581d8fddfccb227db4845129c2bcec74f",
    "0x831fbea0edcdb5a6098e2b653c3f900bd48b1752"
]

mongoose.connect(mongoURI, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Product = require("../models/Product");

(async function syncDB() {
    await Product.remove();

    for(let i = 0; i < stores.length; i++ ) {

        const productInstance = new web3.eth.Contract(ABI_Product, stores[i]);
        let count = 0;

        while (true) {
            try {
                const product = await productInstance.methods.catalogue(count).call();
                const newProduct = new Product({
                    id: count,
                    price: product.price,
                    name: product.name,
                    description: product.description,
                    imageURL: product.imageURL,
                    forSale: product.forSale,
                    ordersReceived: product.ordersReceived,
                    supplyChainLength: product.supplyChainLength,
                    storeAddress: stores[i]
                })
    
                await newProduct.save()
    
                count++;
            } catch (err) {
                break;
            }
    
        }
    }
    process.exit();
})();