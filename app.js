const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mobileshope'
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.pasw;
  const cpsw = req.body.cpsw;
  const name = req.body.uname;
   dob = req.body.dob;
  const mobile = req.body.mobile;

  const sql = 'INSERT INTO registration (name,email,dob,mobile,password) VALUES (?,?,?,?,?)';
  connection.query(sql, [name,email,dob,mobile,password], (error, results) => {
    if (error) throw error;
    res.send('User registered successfully');
  });
});


app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sql = 'SELECT email,password FROM registration WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.send('Logged in successfully');
    } else {
      res.send('Invalid email or password');
    }
  });
});


app.get('/change', (req, res) => {
  res.sendFile(__dirname + '/change.html');
});
app.post('/change', (req, res) => {
  const email = req.body.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const selectSql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(selectSql, [email, oldPassword], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      const updateSql = 'UPDATE users SET password = ? WHERE email = ?';
      connection.query(updateSql, [newPassword, email], (error, results) => {
        if (error) throw error;
        res.send('Password changed successfully');
      });
    } else {
      res.send('Invalid email or password');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

