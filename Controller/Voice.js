const { Resemble } = require('@resemble/node');

const New_Voice_Creation = async (req,res) => {
    try{
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const create_Voice = await Resemble.v2.voices.create({
            name: req.body.name,
            dataset_url : req.body.dataset_url
        })
        res.send({
            message:`${create_Voice.item.name} Voice Created Successfully` ,
            status:200,
            data: create_Voice.item
        })
    }catch(err){
        res.send({
            message:"No Voice Found" ,
            status:404
        })
    }
    
}

const GetAllVoices = async (req,res) => {
    try{
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        let page = req.query.page || 2;
        let pageSize = req.query.pageSize || 10;
        const data = await Resemble.v2.voices.all(page,pageSize);
        res.send({
            totol:data.items.length,
            message:"Fetch All Voices",
            status:201,
            data: data.items
        })
    }catch(err){
        res.send({
            message:"Do not Fetch All Voices",
            status:404
        })
    }
   
}

const Get_Specfic_Voice  = async (req,res) => {
    try{
        const voice_id = req.params.uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Data_fetched = await Resemble.v2.voices.get(voice_id);
        res.send({
            message:`${Data_fetched?.item?.name} Voice Fetched Successfully`,
            status:200,
            data: Data_fetched.item
        })
    } catch(err){
        res.send({
            message:`Voice Not Found`,
            status:404
        })
    }
    
    
}

const Build_Voice = async (req,res ) => {
    try{
        const voice_id = req.params.uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const data = await Resemble.v2.voices.build(voice_id);
        res.send({
            message:"Voice Trained Successfully",
            status:201,
            data:data
        })
    } catch(err){
        res.send({
            message:"Voice Not Build",
            status:404
        })
    }
}
module.exports = {
    New_Voice_Creation,
    Build_Voice,
    GetAllVoices,
    Get_Specfic_Voice
}