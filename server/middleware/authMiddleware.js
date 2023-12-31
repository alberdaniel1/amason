const jwt = require("jsonwebtoken");
const User = require('../models/userModel.js');

module.exports = {
//Protect routes
async protect(req, res, next){
   let token;

   //Read the JWT from the cookie
   token = req.cookie.jwt;

   if (token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = await User.findById(decoded.userId).select
        ('-password');
        next();
    } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
   } else {
    res.status(401);
    throw new Error('Not authorized, token failed');
   }
},

//Admin middleware
async admin(req, res, next){
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as admin');
    }
},

}