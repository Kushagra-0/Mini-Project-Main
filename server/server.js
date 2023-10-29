require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')


const PORT = process.env.PORT || 3500

//MongoDB
const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
};
connectToMongo();

module.exports = connectToMongo;

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/users', userRoute);
app.use('/api/auth' , authRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});