const express = require("express");
const router = express.Router();

const { register } = require("../Controllers/Users");

router.get("/register", register);

module.exports = router;
