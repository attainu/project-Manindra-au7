const express = require('express')
const router = express.Router()

const {signup} = require("../controllers/user")

router.get('/',(req,res)=>res.json({message:"hello world.."}))

router.post('/signup',signup)

module.exports = router;