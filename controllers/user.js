const User=require('../models/user')


exports.signup = async(req,res) => {
    console.log(req.body);
   const user = await new User(req.body)
   res.json(user)
}