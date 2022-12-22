const { Resemble } = require('@resemble/node');
const UserModel = require('../Models/Users');

const Create_New_User_Clip = async (req,res) => {
    try{
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Project_id = req.params.uuid;
        const User_id = req.params.uid
        const User = await UserModel.findById(User_id)
        const pro = await Resemble.v2.projects.get(Project_id)
        const name = pro.item.name 
        
        const data = await Resemble.v2.clips.createAsync(Project_id,{
            title : req.body.title,
            body : `Hi` +" "+User.username +" "+ req?.body?.body +" "+ name,
            voice_uuid : req?.body?.voice_uuid ,
            callback_uri : fullUrl
            
        })
        res.send({
            message:data.message,
            status:201,
            data: data.item
        })
    }catch(err){
        res.send({
            message:data.message,
            status:404
        }) 
    }

    
}

const Create_New_Clip = async (req,res) => {
    try{
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Project_id = req.params.uuid;
        const data = await Resemble.v2.clips.createAsync(Project_id,{
            title : req.body.title,
            body : req?.body?.body,
            voice_uuid : req?.body?.voice_uuid ,
            callback_uri : fullUrl
            
        })
        res.send({
            message:data.message,
            status:201,
            data: data.item
        })
    }catch(err){
        res.send({
            message:data.message,
            status:404
        }) 
    }

    
}

const Get_All_Clips = async (req,res) => {

    try{
        const Project_id = req.params.uuid;
        const page = req.query.page;
        const pageSize = req.query.pageSize;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Project = await Resemble.v2.projects.get(Project_id)
        const All_Project_Clips = await Resemble.v2.clips.all(Project_id ,page,pageSize);
        res.send({
            total : All_Project_Clips?.items?.length,
            message:`${Project?.item?.name} Project All Clips Fetched`,
            status:201,
            data: All_Project_Clips?.items
        })
    }catch(err){
        console.log(err)
    }
}

const Get_Specific_Clip = async (req,res) => {
    try{
        const Project_id = req.params.p_id;
        const Clip_id = req.params.c_id;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Get_specfic = await Resemble.v2.clips.get(Project_id , Clip_id);
        res.send({
            message:`${Get_specfic.item.title} Clips Fetch Successfully`,
            status:200,
            data: Get_specfic.item
        })
    }catch(err){
        res.send({
            message:`No Clip Found`,
            status:404
        })
    }
    
}

const Delete_Clip = async (req,res) => {
    try{
        const Project_id = req.params.p_id;
        const Clip_id = req.params.c_id;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const delete_Clip = await Resemble.v2.clips.delete(Project_id , Clip_id);
        res.send({
            message:"Clip Delete Successfully",
            status:202,
            data:delete_Clip.success
        })
    }catch(err){
        res.send({
            message:"No Clip Found",
            status:204
        })
    }
}

const Update_Specific_Clip = async (req,res) => {
    try{
        const Project_id = req.params.p_id
        const Clip_id = req.params.c_id
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const update_Clip = await Resemble.v2.clips.updateAsync(Project_id,Clip_id,{
            title : req.body.title,
            body : req?.body?.body,
            voice_uuid : req?.body?.voice_uuid ,
            callback_uri : fullUrl
        })
        res.send({
            message:"Clips has been Updated",
            status:201,
            data:update_Clip
        })
    }catch(err){
        res.send({
            message:"Clips has not been Updated",
            status: 404
        })
    }
}

module.exports = {
    Create_New_User_Clip,
    Create_New_Clip,
    Get_All_Clips,
    Get_Specific_Clip,
    Delete_Clip,
    Update_Specific_Clip
}