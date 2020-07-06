const express = require('express');
const router = express.Router();


router.get('/home', (req, res) => {
    res.send('hello visitor tracking app..')
})


module.exports = router;