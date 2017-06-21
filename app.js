const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

let userData = {};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());

app.set("views","./views");
app.set("view engine",'mustache');


app.get("/", function(req, res){
  res.render("index", {name: "David"});
});

app.post("/signup", function(req, res){
  userData.name = req.body.name;
  userData.email = req.body.email;
  userData.birthyear = req.body.birthyear;
  userData.position = req.body.position;
  userData.password = req.body.password;
  console.log(req.body);

  res.redirect("/signup");
});

app.get("/signup", function(req, res){
  res.render("signup", userData);
});

app.listen(3000, function(){ console.log("App running on localhost:3000") });
