const jwt = require('jsonwebtoken');

const User_Token_Authentication = (req,res) => {

    const token = req.headers['authorization'].split(" ")[1];
    
    if(!token){
        res.send({ message:"token is expired you are still un-Authorized" })
    }
    else{
        const decoded =  jwt.verify(token , process.env.SECRET_KEY)
        return req.id = decoded.id
    }

}
module.exports = User_Token_Authentication;