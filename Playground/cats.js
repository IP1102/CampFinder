var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name: "George",
    age: 10
}, (err)=>{
    if(err){
        console.log(err);
    }
})