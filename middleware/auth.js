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
const authTokenAndAuthorization = (req, res, next) => {
    authenticateToken(req, res, () => {
        if (req.user.id === req.params.id || req.params.id || req.user.isAdmin) {
            next();
        } else {
        res.status(403).json("You are not admin!!");
        }
    });
};
const authTokenAndAdmin = (req, res, next) => {
    authenticateToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
        res.status(403).json("You are not admin");
        }
    });
    };
    
module.exports = {
    authenticateToken,
    authTokenAndAuthorization,
    authTokenAndAdmin,
};
