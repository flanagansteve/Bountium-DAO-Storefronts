const express = require("express");
const { getAllProductsByStore, getProductByIdAndStore, getBizName } = require("../controllers/product");

const router = express.Router();

router.get("/getProducts/:store", getAllProductsByStore);
router.get("/getProducts/:store/:id", getProductByIdAndStore);
router.get("/bizName/:store", getBizName);

module.exports = router;