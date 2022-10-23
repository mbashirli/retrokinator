const express = require("express");
const router = express.Router();
const {
  getFoods,
  postOption,
  addFoods,
  getQuestions,
} = require("../controller/foodController");

router.get("/getFoods/:id", getFoods);
router.get("/getQuestions/:id", getQuestions);
router.post("/sendOption", postOption);
router.post("/addFoods", addFoods);
router.post("/postOption", postOption);

module.exports = router;
