const User=require("../models/User")
const bcrypt=require("bcrypt")
const {generateAccessToken,generateRefreshToken}=require("../utils/token")
const {sendResetEmail}=require("../utils/email")
const {v4:uuid}=require("uuid")

exports.register=async(req,res)=>{
const {name,email,password,dailyGoal}=req.body

const hash=await bcrypt.hash(password,10)

const user=new User({
name,
email,
passwordHash:hash,
dailyGoal
})

await user.save()

res.json({msg:"registered"})
}

exports.login=async(req,res)=>{
const {email,password}=req.body

const user=await User.findOne({email})

if(!user) return res.status(400).json({msg:"user not found"})

const match=await bcrypt.compare(password,user.passwordHash)

if(!match) return res.status(400).json({msg:"wrong password"})

const payload={
id:user._id,
role:user.role
}

const access=generateAccessToken(payload)
const refresh=generateRefreshToken(payload)

res.json({access,refresh})
}

exports.refresh=async(req,res)=>{
const token=req.body.refresh

const jwt=require("jsonwebtoken")

try{
const decoded=jwt.verify(token,process.env.REFRESH_SECRET)
const access=generateAccessToken({id:decoded.id,role:decoded.role})
res.json({access})
}catch(e){
res.status(401).json({msg:"invalid"})
}
}

exports.requestReset=async(req,res)=>{
const {email}=req.body

const user=await User.findOne({email})

const token=uuid()

user.resetToken=token

await user.save()

sendResetEmail(email,token)

res.json({msg:"email sent"})
}

exports.resetPassword=async(req,res)=>{
const {token,password}=req.body

const user=await User.findOne({resetToken:token})

const hash=await bcrypt.hash(password,10)

user.passwordHash=hash
user.resetToken=null

await user.save()

res.json({msg:"password updated"})
}