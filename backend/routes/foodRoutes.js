const express = require("express");
const router = express.Router();
const {
  getFoods,
  postOption,
  getReceipts,
  addFoods,
} = require("../controller/foodController");

router.get("/getFoods", getFoods);
router.get("/getReceipts/:id", getReceipts);
router.post("/sendOption", postOption);
router.post("/addFoods", addFoods);

module.exports = router;
