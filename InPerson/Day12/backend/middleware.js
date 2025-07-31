const jwt=require('jsonwebtoken')
const SECRET_KEY='sanislearning'
function AuthHandler(req,res,next){
    let token=req.headers.token
    try {
        let decodedId=jwt.verify(token,SECRET_KEY)
        req.username=decodedId.username
        next()
    } catch (error) {
        console.log(error)
        res.status(403).json({
            error:error,
            response:"Your token is not valid"
        })
    }
}

module.exports={
    auth:AuthHandler
}