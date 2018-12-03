// Import express/mysql conf/port
const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 6999;
const articlesPerPage = 10;

// LOCAL DEV
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Header", "Origin, Content-Type, Accept");
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

//connection Mysql
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "olivbret0608",
  database: "amazon"
});

// confirm mysql connection
connection.connect(function(err) {
  if (err) throw err;
    console.log("server is connected on mysql")
});

app.get('/articles/pages', function (req, res) {
  connection.query(`SELECT COUNT(*)/${articlesPerPage} AS pages FROM articles`, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

// api get articles from DB
app.get('/articles/page/:page', function (req, res) {
  let offset = articlesPerPage*req.params.page;
  connection.query(`SELECT * FROM articles LIMIT ${articlesPerPage} OFFSET ${offset}`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

//confrim  connection on port
app.listen(port, function() {
  console.log('Example app listening on port !')
});

//10  artciles par page

 