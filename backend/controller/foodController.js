const asyncHandler = require("express-async-handler");
userData = require("../userData/userData");
handleData = require("../userData/handleUserData");

const pool = require("../db");

// @desc    Get all foods
// @route   GET /api/foods
// @access  Private
const getFoods = asyncHandler(async (req, res) => {
  try {
    const Foods = await pool.query("SELECT * FROM food");
    res.json(Foods.rows[req.params.id]);
  } catch (err) {
    throw new Error(err);
  }
});

// @desc Get all questions
// @route GET /api/foods
// @access Private
const getQuestions = asyncHandler(async (req, res) => {
  try {
    const Questions = await pool.query("SELECT * FROM question");
    res.json(Questions.rows[req.params.id]);
  } catch (err) {
    throw new Error(err);
  }
});

// @desc Add food
// @route POST /api/foods
// @access Private
const addFoods = asyncHandler(async (req, res) => {
  try {
    const { f_name, f_description, f_cuisine, f_ingredients } = req.body;
    const newFood = await pool.query(
      `INSERT INTO food (f_name, f_description,  f_cuisine, f_ingredients) VALUES ('${f_name}', '${f_description}', '${f_cuisine}', '${f_ingredients}' )`
    );

    res.json({
      f_name: f_name,
      f_description: f_description,
      f_cuisine: f_cuisine,
      f_ingredients: f_ingredients,
    });
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
});

// @desc    Post option
// @route   POST /api/foods
// @access  Private
const postOption = asyncHandler(async (req, res) => {
  const { answer, id } = req.body;
  if (!answer) {
    res.status(400);
    throw new Error("Answer not provided");
  }

  if (
    answer != "A" &&
    answer != "B" &&
    answer != "C" &&
    answer != "D" &&
    answer != 0
  ) {
    res.status(400);
    throw new Error("Answer should be one of A,B,C, or D");
  }

  try {
    if (answer != 0) {
      userData[id - 1].answer = answer;
      res.send(userData);
    } else {
      let result = handleData();
      console.log(result);
      if (result == "Eggs") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[4]);
      } else if (result == "Pizza") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[1]);
      } else if (result == "ArrozConPollo") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[2]);
      } else if (result == "FettucineSteak") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[3]);
      } else if (result == "Risotto") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[4]);
      } else if (result == "PadThai") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[5]);
      } else if (result == "Salmon") {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[6]);
      } else {
        let Foods = await pool.query("SELECT * FROM food");
        res.json(Foods.rows[2]);
      }
      for (obj in userData) {
        userData[obj].answer = undefined;
      }
    }
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
});
module.exports = {
  getFoods,
  addFoods,
  postOption,
  getQuestions,
};
