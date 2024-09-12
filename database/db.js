const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected successfully on: ${connect.connection.host}`);
        
    } catch (error) {
        throw new Error(`error: ${error.message}`)
    }
}

module.exports = connectDB