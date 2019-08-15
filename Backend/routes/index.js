const express = require("express");
const { getAllProductsByStore, getProductByIdAndStore } = require("../controllers/product");

const router = express.Router();

router.get("/getProducts/:store", getAllProductsByStore);
router.get("/getProducts/:store/:id", getProductByIdAndStore);

module.exports = router;