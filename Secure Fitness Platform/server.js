const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const cookieParser=require("cookie-parser")

dotenv.config()

const authRoutes=require("./routes/authRoutes")
const workoutRoutes=require("./routes/workoutRoutes")

const app=express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/workout",workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err))

app.listen(process.env.PORT,()=>{
console.log("server running")
})