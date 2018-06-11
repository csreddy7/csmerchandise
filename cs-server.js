var express=require("express");
var path=require("path");
var app=express();


app.use(express.static(__dirname+'/'));


app.listen(80);
console.log("server listening at 80");