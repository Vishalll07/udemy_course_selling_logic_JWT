// Middleware for handling auth
const jwt = require("jsonwebtoken");
const  {JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization; // bearer token
    // console.log(token);
    //console.log(req.headers)
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
  
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    
}    

module.exports = adminMiddleware;