const path = require("path");
const AppError = require("../utils/appError");
const fs = require("fs");

exports.uploadProductImageLocal = async (req, res, next) => {
  res.status(201).json("created");
};

