const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-hobby', (req, res, next) => {
    res.send('<form action="/admin/group-it/add-hobby" method="POST"><input type="text"  name="hobby_name"> <button type="submit"></button></input> </form>');
});

router.post('/group-it/add-hoby', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Hobby Added</h1>');
});

module.exports = router; /*
If there is a need to export some more stuff the syntax is the following:
exports.name = name; - for each thing you want to export.

after replacing the line you should also return to app.js and update the line 
app.use('/admin', adminRoutes);
to
app.use('/admin', adminRoutes.router); - like properties of an object
*/