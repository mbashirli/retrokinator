const express = require("express");
const router = express.Router();
const { getFoods, postOption } = require("../controller/foodController");

router.get("/getFoods", getFoods);
router.post("/sendOption", postOption);

module.exports = router;
