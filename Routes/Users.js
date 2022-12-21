const router = require('express').Router()
const auth = require('../Middleware/Authentication')
const { CreateNewUser, LoginRegisteredUser, VerifyRegisteredUser ,AllUsers } = require('../Controller/Users')

router.post('/register', CreateNewUser);
router.post('/login', LoginRegisteredUser);
router.post('/profile', auth , VerifyRegisteredUser);
router.get('/getall' , AllUsers);

module.exports = router