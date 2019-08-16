const mongoose = require("mongoose");
const web3 = require("./web3");
const ABI_Product = require("./ABI");

const {
    mongoURI,
} = require("../config");

const stores = [
    "0x78d00bFCF110ddc32F0BF03e077ac8A58dC5e573",
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
        const bizName = await productInstance.methods.biz_name().call();

        let count = 0;

        while (true) {
            try {
                const product = await productInstance.methods.catalogue(count).call();
                console.log('product :', product);
                const newProduct = new Product({
                    id: count,
                    price: product.price,
                    name: product.name,
                    description: product.description,
                    imageURL: product.imageURL,
                    forSale: product.forSale,
                    ordersReceived: product.ordersReceived,
                    orderOptions: product.orderOptions,
                    storeAddress: stores[i],
                    bizName
                })
    
                await newProduct.save()
    
                count++;
            } catch (err) {
                // console.log(err);
                break;
            }
    
        }
    }
    process.exit();
})();