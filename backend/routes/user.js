const express = require('express');
const router = express.Router();
const {Signup, login } = require('../controllers/user')



//user signup
router.post('/user/signup', Signup);

//user login
router.post('/user/login', login);

//user logout
router.get('/user/logout', (req, res) => {
    //ip
});



module.exports = router;