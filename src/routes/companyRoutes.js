const express = require("express");
const router = express.Router();

const { getNewCompanies } = require("../controllers/companyController.js");

router.get("/", getNewCompanies);

module.exports = router;
