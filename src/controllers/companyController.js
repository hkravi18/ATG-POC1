const { Company } = require("../models");

//utils
const CustomError = require("../utils/customError.js");

// @desc    Get Two New Companies
// route    GET /api/company/
// @access  Public
const getNewCompanies = async (req, res, next) => {
  try {
    const companies = await Company.findAll({
      where: { isSent: false },
      limit: 2,
      attributes: ["id", "email"],
    });

    const newCompanies = companies;

    //marking the records as send after fetching them
    await Promise.all(
      companies.map((company) => company.update({ isSent: true }))
    );

    res.status(200).json({
      success: true,
      data: {
        companies: newCompanies,
      },
      error: null,
    });
  } catch (err) {
    const error = new CustomError(
      err.message,
      500,
      "get-new-companies",
      "Error",
      "INVALID"
    );
    next(error);
  }
};

// @desc    Verify Company
// route    PUT /api/company/
// @access  Public
const verifyCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    //company id is not provided
    if (!id) {
      const error = new Error(
        "Please give all the fields",
        400,
        "verify-company",
        "Company Id is required for verification",
        "INVALID_REQUEST"
      );
      next(error);

      return;
    }

    //checking the company's email with given id is already verified
    const companyVerificationStatus = await Company.findOne({
      where: { id },
    });

    //company's email is already verified
    if (companyVerificationStatus.emailVerified) {
      const error = new CustomError(
        "Company is already verified",
        400,
        "verify-company",
        "Company with given Id is already verified",
        "INVALID_REQUEST"
      );
      next(error);

      return;
    }

    //updating the company's email verification status
    const updatedCompany = await Company.update(
      { emailVerified: true },
      {
        where: { id },
      }
    );

    //fetching the company details (to send back to client)
    const company = await Company.findOne({
      where: { id },
    });

    if (updatedCompany[0] > 0) {
      res.status(200).send({
        success: true,
        data: {
          company,
        },
        error: null,
      });
    } else {
      const error = new CustomError(
        "Please valid id",
        400,
        "verify-company",
        "Company with given Id does not exists",
        "INVALID_REQUEST"
      );
      next(error);
    }
  } catch (err) {
    const error = new CustomError(
      err.message,
      500,
      "verify-company",
      "Error",
      "INVALID"
    );
    next(error);
  }
};

module.exports = {
  getNewCompanies,
  verifyCompany,
};
