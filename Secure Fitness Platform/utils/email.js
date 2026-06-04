const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
service:"gmail",
auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}
})

exports.sendResetEmail=(email,token)=>{
transporter.sendMail({
from:process.env.EMAIL_USER,
to:email,
subject:"Reset Password",
text:`Reset token ${token}`
})
}