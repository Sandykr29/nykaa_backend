const express = require("express")
const { userRouter } = require("./routes/user.router")
const { productRouter } = require("./routes/product.route")
const cors = require("cors")
const { connection } = require("./db")
require("dotenv").config()

const app = express()
app.use(cors())

app.use("/api/",userRouter)
app.use("/api/post",productRouter)



app.listen(8000,async()=>{
   try {
    await connection;
    console.log("Server is running at port 8000")
    console.log("Connected to DB")
   } catch (error) {
    console.log("Error in connecting with the server due to -->",error)
   }
})

module.exports = app