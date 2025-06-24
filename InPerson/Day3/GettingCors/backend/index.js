const express=require("express")
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors());

app.post("/sum", (req,res)=>{
    var body = req.body
    console.log(body)
    const num1 = body.num1
    const num2 = body.num2

    const ans = num1 + num2
    res.send({
        answer:ans
    })
})

app.listen(port,()=>{
    console.log("Listening at port "+port)
})