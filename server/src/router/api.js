const express = require("express");
const router = express.Router();
const { handleGetProducts } = require("../services/CRUDService");

router.get("/data", handleGetProducts);

module.exports = router;
