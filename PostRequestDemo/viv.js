var express = require("express");
var viv = express();
var bodyParser = require("body-parser");

viv.use(bodyParser.urlencoded({extended:true}))
    viv.set("view engine","ejs")
   var friends = ["Tony","Harry","Miranda"];
    viv.get("/",function(req,res){
    res.render("home");
    });
    
    
    viv.post("/addfriend",function(req,res){
        var newFriend = req.body.newfriend;
        friends.push(newFriend)
        res.redirect("/friends"); 
    });

    viv.get("/friends",function(req,res){
  
    res.render("friends",{list:friends});
    });

viv.listen(process.env
.PORT,process.env.IP,function(){
    console.log("Serer started!");
});