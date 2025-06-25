//Middleware function that logs each incoming request's HTTP method, URL and timestamp to the console
const express = require("express");

const app = express();
let requestCount=0;

function tracker(req,res,next){
    let method=req.method;
    let timestamp=new Date();
    let url=req.url;
    console.log(`Method:${method} Timestamp:${timestamp} URL: ${url}`)
    next()
}

app.get("/sum",tracker,function(req,res){
    res.send("Done")
});


app.listen(3000);