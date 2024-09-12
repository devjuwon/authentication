// all user endpoints will be defined here
const express = require("express")
const { registerUser, registerAdmin, loginUser, forgotPassword, resetPassword } = require("../controllers/userController")

const router = express.Router()

// user route 
router.post("/register", registerUser)

router.post("/login", loginUser)
router.post("/forgot-password", forgotPassword)
router.put("/reset-password/:resetToken", resetPassword)


// admin route
// router.post("/admin", registerAdmin)

 








module.exports = router