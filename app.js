
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
const items = [];
const workItems = [];
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Get Request Handler
app.get("/", function(req, res) {

  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // var today  = new Date();
  //
  // var currentDate = today.toLocaleDateString("en-US", options);

  var currentDate = date.getDate();

  res.render("list", { title: currentDate, newListItem: items });

});

app.get("/work", function(req, res) {

  res.render("list", { title: "Work", newListItem: workItems });

});


// Post Request Handler
app.post("/", function(req, res) {
  var item = req.body.addedItem;

  console.log(req.body);

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.post("/work", function(req, res) {
  var item = req.body.addedItem;

  workItems.push(item);

  res.redirect("/work");

});




app.listen(port, function() {
  console.log("Server running on port " + port);
});
