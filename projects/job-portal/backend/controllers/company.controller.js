import Company from "../models/company.model.js";
import User from "../models/user.model.js";

export const createCompany = async (req, res) => {
  try {
    const { name, description, companySize, location, address, emails } =
      req.body;

    // Ensure only employers can create companies
    if (!req.user || !req.user.role.includes("employer")) {
      return res
        .status(403)
        .json({ message: "Only employers can create companies" });
    }

    if (!name || !emails?.length) {
      return res
        .status(400)
        .json({ message: "Name and at least one email are required" });
    }

    const newCompany = await Company.create({
      name,
      description,
      companySize,
      location,
      address,
      emails,
      createdBy: req.user.id,
    });

    res
      .status(201)
      .json({ message: "Company created successfully", company: newCompany });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate("createdBy", "name email");
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    if (company.createdBy.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this company" });
    }

    const updates = req.body;
    Object.assign(company, updates);

    await company.save();
    res.status(200).json({ message: "Company updated", company });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) return res.status(404).json({ message: "Company not found" });

    if (company.createdBy.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this company" });
    }
    await company.deleteOne();

    res.status(200).json({ message: "company deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
