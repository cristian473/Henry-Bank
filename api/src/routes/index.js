const { Router } = require("express");
const router = Router();
const passport = require("passport");
const configPassport = require("./pass");
const session = require("express-session");

// import all routers;
const authPath = require("./auth.js");
const usersPath = require("./users.js");
const transactionsPath = require("./transactions.js");

router.use("/auth", authPath);
router.use("/users", usersPath);
router.use("/transactions", transactionsPath);

module.exports = router;
