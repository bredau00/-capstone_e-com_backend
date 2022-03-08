require("dotenv").config;

const express = require("express");
const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getAdmin } = require("../middleware/finders");
const router = express.Router();

// GET all admins
router.get("/", async (req, res) => {
    try {
    const admins = await Admin.find();
    res.json(admins);
    } catch (error) {
    res.status(500).send({ message: error.message });
    }
});

// GET one admin
router.get("/:id", getAdmin, (req, res, next) => {
    res.send(res.admin);
});

// LOGIN Admin with email + password
router.patch("/", async (req, res, next) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) res.status(404).json({ message: "Could not find admin" });
    if (await bcrypt.compare(password, admin.password)) {
    try {
        const access_token = jwt.sign(
        JSON.stringify(admin),
        process.env.MONGO_PASS
        );
        res.status(201).json({ jwt: access_token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    } else {
    res
        .status(400)
        .json({ message: "Email and password combination do not match" });
    }
});

// REGISTER a admin
router.post("/", async (req, res, next) => {
    const { name, email, contact, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new Admin({
    name,
    email,
    contact,
    password: hashedPassword,
    });

    try {
    const newAdmin = await admin.save();
user
    try {
        const access_token = jwt.sign(
        JSON.stringify(newAdmin),
        process.env.MONGO_PASS
        );
        res.status(201).json({ jwt: access_token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
});

// UPDATE a admin
router.put("/:id", getAdmin, async (req, res, next) => {
    const { name, email, contact, password } = req.body;
    if (name) res.admin.name = name;
    if (email) res.admin.email = email;
    if (contact) res.admin.contact = contact;
    if (password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    res.admin.password = hashedPassword;
    }

    try {
    const updatedAdmin = await res.admin.save();
    res.status(201).send(updatedAdmin);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
});

  // DELETE a admin
router.delete("/:id", getAdmin, async (req, res, next) => {
    try {
    await res.admin.remove();
    res.json({ message: "Deleted admin" });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});

module.exports = router;