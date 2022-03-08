require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
const authHeader = req.headers["authorization"];

const token = authHeader && authHeader.split(" ")[1];
if (!token || token == null)
    return res.status(401).send({ message: "Admin not logged in" });

jwt.verify(token, process.env.MONGO_PASS, (err, admin) => {
    if (err) res.status(403).send({ message: err.message });
    req.admin = admin;
    return next();
});
}

module.exports = authenticateToken;
