const { Resemble } = require('@resemble/node');

const Create_New_Clip = async (req,res) => {
    const uuid = req.params.uuid;
    Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');

    const data = await Resemble.v2.clips.createAsync(uuid,{
        title : req.body.title,
        body : req.body.body,
        voice_uuid : req.body.voice_uuid,
        is_public : req.body.is_public,
        is_archived : req.body.is_archived,
    })

    res.send({
        message:data.message,
        status:201,
        data: data.item
    })
    console.log(data)
    
}


module.exports = {
    Create_New_Clip
}