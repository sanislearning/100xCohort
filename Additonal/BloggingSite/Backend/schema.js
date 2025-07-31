const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    username:String,
    password:String
})

const BlogSchema=mongoose.Schema({
    title:String,
    description:String,
    userId:mongoose.Schema.Types.ObjectId
})

const UserModel=mongoose.model('user',UserSchema)
const BlogModel=mongoose.model('blog',BlogSchema)
module.exports={
    UserModel:UserModel,
    BlogModel:BlogModel
}