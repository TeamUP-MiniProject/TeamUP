const express = require('express');
const { append } = require('express/lib/response');
const authControllers = require('../controllers/auth/login');
const router = express.Router();

router.get('/login', authControllers.getLogin);
router.get('/sign-up', authControllers.getSignUp);


module.exports = router;