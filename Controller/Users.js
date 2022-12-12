const UserModel = require('../Models/Users');

const CreateNewUser = async (req,res,next) => {
    const user = new UserModel({
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        verifiedUser : req.body.verifiedUser
    });
    const Registered_Users = await user.save();
    console.log(Registered_Users)
}


module.exports = {
    CreateNewUser
}