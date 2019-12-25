var port = process.env.PORT || 3000;
var express = require("express");
var ejs = require('ejs');
var request = require('request');
var app = express();
 
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port, function() {
 console.log("Server listening on port " + port);
});
