const { Router } = require("express");
const router = Router();
const passport = require("passport");
const configPassport = require("./pass");
const session = require("express-session");

// import all routers;
const authPath = require("./auth.js");
const usersPath = require("./users.js");

router.use("/auth", authPath);
router.use("/users", usersPath);

module.exports = router;
