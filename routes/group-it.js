const path = require('path');
const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('register-user' , (req,res,next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'register-user.html'));
});

router.get( (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'group-it-home.html'));
});



module.exports = router;