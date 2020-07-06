const express = require('express');
const router = express.Router();

const {visitorLogin, getUserById, visitorLogout, visitorStatus} = require('../controllers/visitor')


router.param('visitorId', getUserById )

//visitor login
router.post('/visitorLogin', visitorLogin);

//visitor logout
router.get('/visitorLogout/:visitorId', getUserById, visitorLogout);

//visitor status
//router.get('/status/:visitorId', visitorStatus);
router.get('/status', visitorStatus);

//visitor details
router.get('/details:visitorId', (req, res) => {
    //yet to implement
});

//visitor history
router.get('/history:name', (req, res) => {
    //yet to implemetn
});




module.exports = router;