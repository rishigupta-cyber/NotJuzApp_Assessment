const express=require("express")
const router=express.Router()

const auth=require("../middleware/auth")

const {
addLog,
updateLog,
deleteLog,
totalCalories,
checkGoal
}=require("../controllers/workoutController")

router.post("/add",auth,addLog)
router.put("/update/:id",auth,updateLog)
router.delete("/delete/:id",auth,deleteLog)

router.get("/calories/:date",auth,totalCalories)
router.get("/goal/:date",auth,checkGoal)

module.exports=router