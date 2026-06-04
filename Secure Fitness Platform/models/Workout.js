const mongoose=require("mongoose")

const workoutSchema=new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
date:String,
activity:String,
duration:Number,
caloriesBurned:Number
})

module.exports=mongoose.model("Workout",workoutSchema)