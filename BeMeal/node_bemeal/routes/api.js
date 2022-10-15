var express = require('express');
var router = express.Router();
var pool = require('../db');
var app = express();
var cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

// create todo
router.post("/update", async (req, res) => {
  try {
    const { post } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", 
    [description]);
    res.send(200)
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
