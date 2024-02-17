const express = require("express");
const router = express.Router();
const { getweatherReport, sendweatherReport } = require("../controllers/weatherController");

router.get("/generate",getweatherReport);
router.post("/generate",sendweatherReport);

module.exports= router;