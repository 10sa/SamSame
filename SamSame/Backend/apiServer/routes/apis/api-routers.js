var express = require("express");
var router = express.Router();

router.use("/account", require("./account.js"));
router.use("/page", require("./page.js"));

module.exports = router;

// app.use("/apis", require("./apis/api-routers.js"));