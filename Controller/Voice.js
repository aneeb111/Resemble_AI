const { Resemble } = require('@resemble/node');

const New_Voice_Creation = async (req,res) => {
    try{
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
        const create_Voice = await Resemble.v2.voices.create({
            name: req.body.name,
            status : req.body.status || "initializing"
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

module.exports = {
    New_Voice_Creation
}