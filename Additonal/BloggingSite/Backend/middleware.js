const jwt=require('jsonwebtoken')
const { model } = require('mongoose')
SECRET_KEY="sanisdoing"

function auth(req,res,next){
    const token=req.headers.token
    try{
        let val=jwt.verify(token,SECRET_KEY)
        req.userId=val.userId
        next()
    }
    catch{
        return res.json({
            response:"Invalid token"
        })
    }
}

module.exports=({
    auth:auth
})