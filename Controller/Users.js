const UserModel = require('../Models/Users');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const Resemble = require('@resemble/node')


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
            next()
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

const LoginRegisteredUser = async (req,res,next) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
    
        const LoginUser = await UserModel.findOne({ email : email });
        const gen_password = CryptoJS.AES.decrypt(LoginUser?.password , process.env.SECRET_KEY);
        const original_password = gen_password.toString(CryptoJS.enc.Utf8);
    
        if(email !== LoginUser?.email ){
            res.send({ message:"Email Not Matched" })
        }else if (password !== original_password){
            res.send({ message:"Password Not Matched" })
        }else{
          const token =  jwt.sign({
                id : LoginUser._id
            }, process.env.SECRET_KEY , { expiresIn: '1h' } )
            res.send({
                 message:"Login Successful",
                 status:200,
                 data:{ token}
                })
        }
    }catch(err){
        res.send({
            message:"Login Failed",
            status:404
           })
    }

}

const VerifyRegisteredUser = async (req,res) => {
    try{
        const resemble = await Resemble('v2', "fAW9INlBUMMTWQk6MSF7zgtt");
        console.log("resemble",resemble)
        const Id =  req.id
        const verified_User = await UserModel.findById(Id);
        const { password , verifiedUser , ...details } = verified_User._doc
        res.send({
            message:"You have successfully Login",
            status:200,
            data : {...details}
        })
    }catch(err){
        res.send({
            message:"Login Failed!",
            status:404
        })
    }
}





module.exports = {
    CreateNewUser,
    LoginRegisteredUser,
    VerifyRegisteredUser
}