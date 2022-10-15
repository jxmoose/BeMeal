var express = require('express');
var router = express.Router();
var pool = require('../db');
var app = express();
var cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create todo
router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", 
    [description]);
    res.send(200)
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
