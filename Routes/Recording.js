const router = require('express').Router()
const Image = require('../Middleware/Image');
const { 
    New_Recording_Creation,
    AllRecording
} = require('../Controller/Recording')

router.post('/Voice_Id/:uuid/create' , Image.upload , New_Recording_Creation);
router.get('/Voice_UUID/:uuid/GetAll' , AllRecording );




module.exports = router