const mongoose=require('mongoose')

const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId

const Admin=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const User=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const Course=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const Purchase=new Schema({
    courseid:ObjectId,
    userid:ObjectId
})

const AdminModel=mongoose.model('admins',Admin)
const UserModel=mongoose.model('users',User)
const CourseModel=mongoose.model('courses',Course)
const PurchaseModel=mongoose.model('purchases',Purchase)

module.exports={
    AdminModel:AdminModel,
    UserModel:UserModel,
    CourseModel:CourseModel,
    PurchaseModel:PurchaseModel
}