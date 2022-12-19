const { Resemble } = require('@resemble/node');
const fs = require('fs')
const New_Recording_Creation = async (req, res) => {
    try {
        const uuid = req?.params?.uuid;
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
        const filename = req?.file?.path
        const files = filename.replace(/\\/g, "/");
        const image = fs.createReadStream(files);
        const imageSize = fs.statSync(files).size
        const Recording = await Resemble.v2.recordings.create(uuid , {
            name: req.body.name,
            emotion: req.body.emotion,
            is_active: req.body.is_active,
            text: req.body.text
        }, image , imageSize)
        res.send({
            message:"Recording has been created",
            status:200,
            data: Recording
        })
    } catch (err) {
        res.send({
            message:"Recording has not been created",
            status:404
        })
    }
}

const AllRecording = async (req, res) => {
    try {
        const uuid = req.params.uuid
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
        let page = 1
        let pageSize = 10
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

module.exports = {
    New_Recording_Creation,
    AllRecording
}