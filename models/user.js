const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({
    UserName:String,
    password:Number
})
const user=mongoose.model("user",UserSchema)
module.exports=user;