const express = require("express");
const { getEmails } = require("../controllers/emailController");
const { authenticate } = require("../utils/token");
const router = express.Router();

router.get("/", authenticate, getEmails);

module.exports = router;
