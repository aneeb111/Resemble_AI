const router = require('express').Router()

const { CheckUsers  }  = require('../Controller/Users')

router.get('/users' , CheckUsers);

module.exports = router