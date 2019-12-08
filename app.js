var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.use(bodyParser());
app.set("view engine", "ejs"); //We don't require to use .ejs later on

var camps = [
    {name: "Sea View", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-ZCmiNnFvrgLit7sxytKPkd2U_YvOzOo3qboLGMDu86EE2aYB"},
    {name: "Mountain Pleasure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvXzYSsWY11NI2MUz6BzoNu6rUvRzuiMqXbtZbUKeBMAKAcrTR"},
    {name: "Scenic Plateau", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyfvVYQA_rrVa9QME45SC4klwxPj6EI_Z9vVrBe5ddYqbqFzlv"}
];


app.get("/",(req,res) => {
    res.render("landing");
});

app.get("/campgrounds", (req,res) => {
    res.render("campgrounds", {campgrounds:camps});
});


app.post("/campgrounds", (req,res)=> {
    //res.send("You hit the POST!");
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name:name, image:image};
    camps.push(newCamp);

    //Redirect
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", (req,res)=> {
    res.render("new");
});

app.listen(port, ()=> {
    console.log("The CampFinder server is UP!");
});


