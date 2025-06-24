//Learning Middlewares

const express=require("express");
const app=express();

let requestCount=0;

function requestIncreaser(){
    requestCount+=1;
    console.log(requestCount)
}


app.get("/sum",function(req,res){
    requestIncreaser()

    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a+b
    })
});

app.get("/mul",function(req,res){
    requestIncreaser();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a*b
    })
});

app.get("/sub",function(req,res){
    requestIncreaser();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a-b
    })
});

app.get("/div",function(req,res){
    requestIncreaser();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a/b
    })
});

app.listen("3000")