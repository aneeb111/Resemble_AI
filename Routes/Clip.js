const router = require('express').Router()

const { 

    Create_New_User_Clip,
    Create_New_Clip,
    Get_All_Clips,
    Get_Specific_Clip,
    Delete_Clip,
    Update_Specific_Clip

} = require('../Controller/Clip')


router.post('/User_id/:uid/Project_id/:uuid/clips' , Create_New_User_Clip );
router.post('/Project_id/:uuid/createclips' , Create_New_Clip );
router.get('/Project_id/:uuid/Getall' , Get_All_Clips );
router.get('/Project_id/:p_id/Clip_id/:c_id' , Get_Specific_Clip );
router.delete('/Project_id/:p_id/Clip_id/:c_id' , Delete_Clip );
router.put('/Project_id/:p_id/Clip_id/:c_id' , Update_Specific_Clip );

module.exports = router