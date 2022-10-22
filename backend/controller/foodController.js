const asyncHandler = require("express-async-handler");

const pool = require("../db");

// @desc    Get all foods
// @route   GET /api/foods
// @access  Private
const getFoods = asyncHandler(async (req, res) => {
  try {
    const foods = await pool.query("SELECT * FROM food");
    res.json(foods.rows);
  } catch (err) {
    throw new Error("New Error");
  }
});

// @desc Add food
// @route POST /api/foods
// @access Private

const addFoods = asyncHandler(async (req, res) => {
  try {
    const { f_name, f_description } = req.body;
    const newFood = await pool.query(
      `INSERT INTO food (f_name, f_description) VALUES ('${f_name}', '${f_description}' )`
    );
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
});

// @desc    Post option
// @route   POST /api/foods
// @access  Private

const postOption = asyncHandler(async (req, res) => {
  const { answer } = req.body;

  if (!answer) {
    res.status(400);
    throw new Error("Answer not provided");
  }

  if (answer != "yes" && answer != "no") {
    res.status(400);
    throw new Error("Answer can only be yes or no");
  }

  try {
    res.send(answer);
    // input option inside postgresql temporary session table
  } catch (err) {
    res.status(400);
    throw new Error("Error");
  }
});

// @desc    GET receipts
// @route   POST /api/foods
// @access  Private

const getReceipts = asyncHandler(async (req, res) => {
  try {
    res.send(req.params.id);
    // get the receipt using the id and send it back
  } catch {
    res.status(400);
  }
});

module.exports = {
  getFoods,
  addFoods,
  postOption,
  getReceipts,
};
