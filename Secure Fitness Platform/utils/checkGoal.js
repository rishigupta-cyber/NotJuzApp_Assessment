const Workout=require("../models/Workout")
const User=require("../models/User")

module.exports=async(userId,date)=>{
const logs=await Workout.find({userId,date})

let total=0

logs.forEach(l=>{
total+=l.caloriesBurned
})

const user=await User.findById(userId)

return total>=user.dailyGoal
}