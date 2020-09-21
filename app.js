require("dotenv").config()
const express =  require("express")
const mongoose = require('mongoose')


const app = express()

//database connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("error connecting TO mONGO DB"))

//routes
app.get("/",(req,res) => {
    res.send("This is the home page")
})

const port = process.env.PORT || 3000
app.listen(port,console.log(`Server is running on ${port}`))


