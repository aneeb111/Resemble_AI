const router = require('express').Router()

const { 
    New_Voice_Creation,
    GetAllVoices,
    Get_Specfic_Voice,
    Build_Voice,
    Delete_Voice
} = require('../Controller/Voice')

router.post('/create' , New_Voice_Creation);
router.get('/getAll' , GetAllVoices);
router.get('/Voice_id/:uuid' , Get_Specfic_Voice );
router.post('/Voice_id/:uuid/build', Build_Voice);
router.delete('/Voice_id/:uuid' , Delete_Voice );



module.exports = router