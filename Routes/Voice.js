const router = require('express').Router()

const { 
    New_Voice_Creation,
    Build_Voice,
    GetAllVoices,
    Get_Specfic_Voice
} = require('../Controller/Voice')

router.post('/create' , New_Voice_Creation);
router.get('/getAll' , GetAllVoices);
router.get('/Voice_id/:uuid' , Get_Specfic_Voice );




router.put('/Voice_id/:uuid/build', Build_Voice);



module.exports = router