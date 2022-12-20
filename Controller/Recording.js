const { Resemble } = require('@resemble/node');
const fs = require('fs')

const New_Recording_Creation = async (req, res) => {
    try {
        const uuid = req?.params?.uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const filename = req?.file?.path
        const files = filename.replace(/\\/g, "/");
        const image = fs.createReadStream(files);
        const imageSize = fs.statSync(files).size
        const Recording = await Resemble.v2.recordings.create(uuid, {
            name: req.body.name,
            emotion: req.body.emotion,
            is_active: req.body.is_active,
            text: req.body.text
        }, image, imageSize)
        res.send({
            message: "Recording has been created",
            status: 201,
            data: Recording
        })
    } catch (err) {
        res.send({
            message: "Recording has not been created",
            status: 404
        })
    }
}

const AllRecording = async (req, res) => {
    try {
        const uuid = req.params.uuid
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        let page = req.query.page;
        let pageSize = req.query.pageSize;
        const Voice = await Resemble.v2.voices.get(uuid);
        const getAllRecording = await Resemble.v2.recordings.all(uuid, page, pageSize);
        res.send({
            message: `All Recording against ${Voice.item.name}'s Voice Fetched`,
            status: 201,
            data: getAllRecording.items
        })
    } catch (err) {
        res.send({
            message: "No Recording found",
            status: 404
        })
    }

}

const Get_Specfic_Recording = async (req, res) => {
    try {
        const Voice_id = req.params.uuid;
        const Recording_id = req.params.r_uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const selected_data = await Resemble.v2.recordings.get(Voice_id, Recording_id);
        res.send({
            message: "Recording Data Fetched",
            status: 200,
            data: selected_data
        })
    } catch (err) {
        res.send({
            message: "Data Not Found",
            status: 404
        })
    }

}

const Update_Those_Recording = async (req, res) => {
    try {
        const voice_id = req.params.uuid;
        const record_id = req.params.r_uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const update_Record = await Resemble.v2.recordings.update(voice_id, record_id, {
            emotion: req.body.emotion,
            is_active: req.body.is_active || false,
            name: req.body.name,
            text: req.body.text,
        })
        res.send({
            message: `Recording ${update_Record?.item?.name}  has been updated`,
            status: 201,
            data: update_Record?.item
        })
    } catch (err) {
        res.send({
            message: `Record ${update_Record?.item?.name}  not updated`,
            status: 404
        })
    }



}

const Delete_Recording = async (req,res) => {
    try{
        const voice_id = req.params.uuid;
        const record_id = req.params.r_uuid;
        Resemble.setApiKey(process.env.RESEMBLE_AI_KEY);
        const Selected_voice = await Resemble.v2.voices.get(voice_id);
        const DeleteRecord = await Resemble.v2.recordings.delete(voice_id , record_id);
        res.send({
            message: `Recording with Voice of ${Selected_voice?.item?.name} has been Deleted`,
            status:201,
            data: DeleteRecord.success
        })
    }catch(err){
        res.send({
            message:"Recording Not Found",
            status:404
        })
    }
   
}


module.exports = {
    New_Recording_Creation,
    AllRecording,
    Get_Specfic_Recording,
    Update_Those_Recording,
    Delete_Recording
}