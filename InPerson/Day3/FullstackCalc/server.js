const express=require("express");
const app=express();
const port=3000;


app.use(express.json());
app.use(express.static("public")); //Tells Express to serve all static files from public folder

app.post("/sum",function(req,res){
    var body=req.body;
    let val1=body.num1;
    let val2=body.num2;
    let val=parseInt(val1)+parseInt(val2)
    console.log(body);
    res.send({
        answer:val
    })
})

app.post("/sub",function(req,res){
    var body=req.body;
    let val1=body.num1;
    let val2=body.num2;
    let val=parseInt(val1)-parseInt(val2)
    console.log(body);
    res.send({
        answer:val
    })
})

app.post("/mult",function(req,res){
    var body=req.body;
    let val1=body.num1;
    let val2=body.num2;
    let val=parseInt(val1)*parseInt(val2)
    console.log(body);
    res.send({
        answer:val
    })
})

app.post("/div",function(req,res){
    var body=req.body;
    let val1=body.num1;
    let val2=body.num2;
    let val=parseInt(val1)/parseInt(val2)
    console.log(body);
    res.send({
        answer:val
    })
})

app.listen(port,function(){
    console.log("Hi I am running")
});