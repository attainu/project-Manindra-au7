const express =  require("express")
require("dotenv").config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require("./routes/user")


const app = express()

//database connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("error connecting TO mONGO DB"))

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//routes middlewares
app.use('/api',userRoutes)


const port = process.env.PORT || 3000
app.listen(port,console.log(`Server is running on ${port}`))


