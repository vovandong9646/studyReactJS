const express = require("express");
const app = express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("public"));

app.listen(3000,function(){
	console.log("server connect success");
});

app.get("/", function(req,res) {
	res.render("home");
});