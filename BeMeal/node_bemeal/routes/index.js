var express = require('express');
var router = express.Router();
var pool = require('../db');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');
var session = require('express-session');
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* create todo
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
*/

router.get('/db/users', function(req, res){
  const users = pool.query('SELECT * FROM users', [], function(error, results) {
    if (error) throw error;
    res.send(results.rows);
  })
});

router.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
    const login = pool.query('SELECT password FROM users WHERE username = $1', [username], function(error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) throw error;
      // If the account exists
      if (results.rows.length > 0) {
        bcrypt.compare(password, results.rows[0].password, function(err, result) {
          if(result){
            request.session.loggedin = true;
            request.session.username = username;
            response.send("Authenticated!");
            //response.redirect('/');
          }
          else {
            response.send('Incorrect Username and/or Password!');
          }});
        } 
      else {
        response.send('Incorrect Username and/or Password!');
        }			
      //response.end();
    });
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

function hashPassword(username, password){
  bcrypt.hash(password, 5)
  .then(hash => {
    const register = pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash], 
    (err, res) => {
      if (err) {
        throw err
      }
    });
  })
  .catch(err => {
    console.log(err);
  })
};

router.post('/register', function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    const check_username = pool.query("SELECT username FROM users WHERE username = $1", [username], function(error, results){
      if (error) throw error;
      // If the account exists
      if (results.rows.length > 0) {
        response.send("Username already exists");
      }
      else{
        hashPassword(username, password);
      }
    });
      // If there is an issue with the query, output the error
	} else {
		response.send('Please enter valid Username and Password!')
	}
  response.end();
});

module.exports = router;
