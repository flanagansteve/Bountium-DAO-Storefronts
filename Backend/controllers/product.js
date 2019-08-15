const Product = require("../models/Product");

exports.getAllProductsByStore = async (req, res) => {
    const store = req.params.store;
    try {
        const products = await Product.find({
            storeAddress: store
        });

        if (products.length > 0) {
            return res.status(200).json({
                msg: "Success",
                data: products
            })
        }

        return res.status(404).json({
            msg: "No products found",
            data: null
        })

    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({
            msg: "Error",
            data: null
        })
    }
}

exports.getProductByIdAndStore = async (req, res) => {
    const store = req.params.store;
    const id = req.params.id;

    try {
        const product = await Product.find({
            id: id,
            storeAddress: store
        });

        if (product.length > 0) {
            return res.status(200).json({
                msg: "Success",
                data: product
            })
        }

        return res.status(404).json({
            msg: "No product found",
            data: null
        })
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({
            msg: "Error",
            data: null
        })
    }
}