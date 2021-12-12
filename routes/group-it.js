const path = require('path');
const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('register-user' , (req,res,next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'register-user.html'));
});

router.get( (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'group-it-home.html'));
    /*
    if we decide to work with the .pug files using the template engine 
    then we should not send HTML files but render the pug files like so:
    res.render('register-user.pug', data-for-the-template);
    or
    res.render('register-user', data-for-the-template) - the .pug extension is optional
    */ 
});



module.exports = router;