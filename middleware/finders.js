const User = require("../models/users");
const Product = require("../models/products");
const Admin = require("../models/admins");

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);

    if (!user) res.status(404).json({ message: "Could not find user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    
    if (!product) res.status(404).json({ message: "Could not find post" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.product = product;
  next();
}

async function getAdmin(req, res, next) {
  let admin;
  try {
    admin = await Admin.findById(req.params.id);

    if (!admin) res.status(404).json({ message: "Could not find admin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.admin = admin;
  next();
}

module.exports = { getUser, getProduct, getAdmin };
