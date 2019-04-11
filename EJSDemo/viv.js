var express = require("express");
var viv = express();
viv.use(express.static("public"));
viv.set("view engine","ejs");//eliminates use of .ejs expres searches for file name if we type this

    viv.get("/",function(req,res){
     res.render("home"); //used to be home.ejs
   
   
});
viv.get("/scorethegoal/:player",function(req,res){
    var player = req.params.player;
    res.render("bobby",{thingVar:player});//used to be bobby.ejs
    
});
viv.get("/posts",function(req, res) {
    var posts = [
        { team: "Messi", Club : "Barca"},
        { team: "Neymar", Club : "psg"},
        { team: "Bale",  Club : "Real Madrid"},
        
        ];
        res.render("posts",{posts:posts});//used to be posts.ejs
});

viv.listen(process.env.PORT,process.env.IP,function(){
    console.log("Hey I am listening!");
});