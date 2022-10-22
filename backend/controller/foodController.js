const asyncHandler = require("express-async-handler");

const pool = require("../db");

// @desc    Get all foods
// @route   GET /api/foods
// @access  Private
const getFoods = asyncHandler(async (req, res) => {
  try {
    //const characters = await pool.query("SELECT * FROM character");
    res.send("get characters");
  } catch {
    console.error("Error!");
  }
});

// @desc    Post answer
// @route   POST /api/foods
// @access  Private

const postOption = asyncHandler(async (req, res) => {
  const { answer } = req.body;

  if (!answer) {
    res.status(400);
    throw new Error("Answer not provided");
  }
});

module.exports = {
  getFoods,
  postOption,
};
