const express = require("express");
const { home } = require("../Controllers/Users");

const router = express.Router();

router.get("/", home);

module.exports = router;
