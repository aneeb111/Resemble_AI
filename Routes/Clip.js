const router = require('express').Router()

const { 

    Create_New_Clip

} = require('../Controller/Clip')


router.post('/User_id/:uid/Project_id/:uuid/clips' , Create_New_Clip );



module.exports = router