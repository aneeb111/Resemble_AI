const { Resemble } = require('@resemble/node');
const UserModel = require('../Models/Users');

const Create_New_Clip = async (req,res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
    const Project_id = req.params.uuid;
    const User_id = req.params.uid
    const User = await UserModel.findById(User_id)
    const pro = await Resemble.v2.projects.get(Project_id)
    const name = pro.item.name 
    
    const data = await Resemble.v2.clips.createAsync(Project_id,{
        body : `Hi` +" "+User.username +" "+ req?.body?.body +" "+ name ,
        voice_uuid : req?.body?.voice_uuid ,
        callback_uri : fullUrl
        
    })

    res.send({
        message:data.message,
        status:201,
        data: data.item
    })

    
}


module.exports = {
    Create_New_Clip
}