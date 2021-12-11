const path = require('path');
const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();

router.get('/register-user' , (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'register-user.html'));
});
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'group-it-home.html'));
});

module.exports = router;