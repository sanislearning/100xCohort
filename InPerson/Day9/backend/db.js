const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    todos:[{
        title:String,
        id:Number
    }],
})

const UserModel=mongoose.model("User",UserSchema)
module.exports={
    UserModel:UserModel
}
