const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes




const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});