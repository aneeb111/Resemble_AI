const router = require('express').Router()
const Image = require('../Middleware/Image');
const { 
    New_Recording_Creation,
    AllRecording,
    Get_Specfic_Recording,
    Update_Those_Recording,
    Delete_Recording
} = require('../Controller/Recording')

router.post('/Voice_Id/:uuid/create' , Image.upload , New_Recording_Creation);
router.get('/Voice_UUID/:uuid/GetAll' , AllRecording );
router.get('/Voice_Id/:uuid/Recording/:r_uuid' , Get_Specfic_Recording );
router.put('/Voice_Id/:uuid/Recording/:r_uuid' , Update_Those_Recording );
router.delete('/Voice_Id/:uuid/Recording/:r_uuid' , Delete_Recording);


module.exports = router