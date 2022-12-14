const router = require('express').Router()

const { 
    New_Voice_Creation
} = require('../Controller/Voice')

router.post('/create' , New_Voice_Creation)




module.exports = router