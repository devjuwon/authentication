const express = require("express")

const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

const connectDB = require("./database/db")
connectDB()


const userRoute = require("./routes/userRoute")






// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





// using the user route
app.use("/api/users", userRoute)










// testing general route
app.get("/api", (req, res) => {
    res.json({message: "welcome to my server"})
})




// listen for request
app.listen(PORT, () => {
    console.log("server started sucessfully");
    
})