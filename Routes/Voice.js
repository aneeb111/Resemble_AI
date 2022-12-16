const router = require('express').Router()

const { 
    New_Voice_Creation,
    Build_Voice,
    GetAllVoices
} = require('../Controller/Voice')

router.post('/create' , New_Voice_Creation);
router.get('/getAll' , GetAllVoices);





router.put('/Voice_id/:uuid/build', Build_Voice);



module.exports = router