const { Company } = require("../models");

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
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const verifyCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Company Id is required for verification");
    }

    const updatedCompany = await Company.update(
      { emailVerified: true },
      {
        where: { id },
      }
    );

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
      throw new Error("Company not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getNewCompanies,
  verifyCompany,
};
