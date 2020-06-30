const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 

let items = []; 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

    var today = new Date();
 
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res) => {
  
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server running on 3000, bitchez!")
});