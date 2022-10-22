const express = require("express");
const cors = require("cors");
const pool = require("./db");
const path = require("path");

const app = express();

// middleware functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/foods", require("./routes/foodRoutes"));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server has started at the port ${PORT}`);
});
