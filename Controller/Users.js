const UserModel = require('../Models/Users');
const CryptoJS = require("crypto-js");

const CreateNewUser = async (req, res, next) => {
    try {
        const user = new UserModel({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
            verifiedUser: req.body.verifiedUser
        });

        if (req.body.password.length > 7) {
            const Registered_Users = await user.save();
            res.send({
                message: "User Created Successfully",
                status: 201,
                data: Registered_Users
            })
            return Registered_Users;

        } else {
            res.send({
                message: "Password Must be 8 charactor",
                status: 500
            })
        }
    } catch (err) {
        res.send({
            message: "User Not Found",
            status: 404
        })
    }
}


module.exports = {
    CreateNewUser
}