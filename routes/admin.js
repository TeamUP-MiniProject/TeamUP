const express = require('express');
const hobbiesControllers = require('../controllers/hobbies');

const rootDir = require('../util/path');
const router = express.Router();

//router.get('/add-hobby', hobbiesControllers.getAddHobby);

//router.post('/group-it/add-hobby', hobbiesControllers.postAddHobby);

module.exports = router; /*
If there is a need to export some more stuff the syntax is the following:
exports.name = name; - for each thing you want to export.

after replacing the line you should also return to app.js and update the line 
app.use('/admin', adminRoutes);
to
app.use('/admin', adminRoutes.router); - like properties of an object
*/