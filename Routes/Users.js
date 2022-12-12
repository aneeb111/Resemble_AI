const router = require('express').Router()

const { CreateNewUser , LoginRegisteredUser  }  = require('../Controller/Users')

router.post('/register' , CreateNewUser );
router.post('/login', LoginRegisteredUser )


module.exports = router