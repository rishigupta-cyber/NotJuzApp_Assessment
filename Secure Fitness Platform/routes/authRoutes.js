const express=require("express")
const router=express.Router()

const auth=require("../middleware/auth")
const limiter=require("../middleware/rateLimit")

const {
register,
login,
refresh,
requestReset,
resetPassword
}=require("../controllers/authController")

router.post("/register",limiter,register)
router.post("/login",limiter,login)
router.post("/refresh",refresh)
router.post("/reset-request",requestReset)
router.post("/reset-password",resetPassword)

module.exports=router