const router = require('express').Router()

const { CreateNewUser  }  = require('../Controller/Users')

router.post('/register' , CreateNewUser );


module.exports = router