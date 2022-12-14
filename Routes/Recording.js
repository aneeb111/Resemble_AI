const router = require('express').Router()

const { 
    New_Recording_Creation,
    AllRecording
} = require('../Controller/Recording')

router.post('/:uuid/create' , New_Recording_Creation);
router.get('/Voice_UUID/:uuid/GetAll' , AllRecording );




module.exports = router