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

module.exports = router;