const express = require("express")
const jobRoutes = require("./Routes/job")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()

dotenv.config()
console.log(process.env.DB_URI)


mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("Error connecting with db", err))

//Middleware
app.use(express.json())


//Middleware as Routes
app.use(jobRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"))