const express= require('express');
const app = express();
const port = 3000;
const cors=require('cors')
app.use(express.json());
app.use(cors());

app.post('/max/:c',function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.body.b);
    let c=parseInt(req.params.c);
    let d=parseInt(req.headers.d);
    if (a>b && a>c && a>d){
        res.send(a);
    }
    else if (b>a && b>c && b>d){
        res.send(b);
    }
    else if (c>a && c>b && c>d){
        res.send(c);
    }
    else{
        res.send(d);
    }
})

app.listen(port);