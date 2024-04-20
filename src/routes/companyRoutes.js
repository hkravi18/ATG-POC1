const express = require("express");
const router = express.Router();

const {
  getNewCompanies,
  verifyCompany,
} = require("../controllers/companyController.js");

router.get("/", getNewCompanies);
router.put("/:id", verifyCompany);

module.exports = router;
