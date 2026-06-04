const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
name:String,
email:{type:String,unique:true},
passwordHash:String,
dailyGoal:Number,
role:{type:String,default:"user"},
createdAt:{type:Date,default:Date.now},
resetToken:String
})

module.exports=mongoose.model("User",userSchema)