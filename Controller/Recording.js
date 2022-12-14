const { Resemble } = require('@resemble/node');

const New_Recording_Creation = async (req, res) => {
    try {
        const uuid = req.params.uuid;
        console.log(uuid)
        const fs = require('fs');
        const file = fs.createReadStream('../public');
        const filesize = file.statSync('../public').size;

        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
        const Recording = await Resemble.v2.recordings.create({
            file: req.body.file,
            emotion: req.body.emotion,
            is_active: req.body.is_active,
            name: req.body.name,
            text: req.body.text
        })
        console.log(Recording)
    } catch (err) {
        console.log("error com")
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