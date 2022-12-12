const router = require('express').Router()
const auth = require('../Middleware/Authentication')
const { CreateNewUser, LoginRegisteredUser, VerifyRegisteredUser } = require('../Controller/Users')

router.post('/register', CreateNewUser);
router.post('/login', LoginRegisteredUser);
router.get('/profile', auth  , VerifyRegisteredUser);


module.exports = router