const Workout=require("../models/Workout")
const checkGoal=require("../utils/checkGoal")

exports.addLog=async(req,res)=>{
const {date,activity,duration,caloriesBurned}=req.body

const exist=await Workout.findOne({
userId:req.user.id,
date,
activity
})

if(exist) return res.json({msg:"duplicate log"})

const log=new Workout({
userId:req.user.id,
date,
activity,
duration,
caloriesBurned
})

await log.save()

res.json(log)
}

exports.updateLog=async(req,res)=>{
const log=await Workout.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(log)
}

exports.deleteLog=async(req,res)=>{
await Workout.findByIdAndDelete(req.params.id)
res.json({msg:"deleted"})
}

exports.totalCalories=async(req,res)=>{
const logs=await Workout.find({
userId:req.user.id,
date:req.params.date
})

let total=0

logs.forEach(l=>{
total+=l.caloriesBurned
})

res.json({total})
}

exports.checkGoal=async(req,res)=>{
const result=await checkGoal(req.user.id,req.params.date)
res.json({goalReached:result})
}