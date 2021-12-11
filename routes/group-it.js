const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>You have reached the main web-page of Group-IT!</h1>")
});

module.exports = router;