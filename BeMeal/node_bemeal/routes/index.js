var express = require('express');
var router = express.Router();
var pool = require('../db');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');

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

app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
    const login = pool.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) throw error;
      // If the account exists
      if (results.length > 0) {
        // Authenticate the user
        request.session.loggedin = true;
        request.session.username = username;
        // Redirect to home page
        response.redirect('/');
      } else {
        response.send('Incorrect Username and/or Password!');
      }			
      response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.post('/register', function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    hashPassword(username, password)
      // If there is an issue with the query, output the erro
	} else {
		response.send('Please enter valid Username and Password!');
		response.end();
	}
});

function hashPassword(username, password){
  bcrypt.hash(password, 5)
  .then(hash => {
    const 
  })
  .catch(err => {
    console.log(err);
  })
}
module.exports = router;
