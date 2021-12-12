const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const rootDir = require('./util/path.js');

const groupRoutes = require('./routes/group-it.js');
const adminRoutes = require('./routes/admin.js');

const app = express();

// building a body parser for each request 
// this body-parser is for parsing the body of the request using form and buttons, files 
// will be needed a different parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Define a static-server folder

/*
app.get or app.post is used to handle the request get/post accordingly.
*/

// app.use gets a function with args (req, res, next) and execute the middleware for the request
// in-order 

app.use('/admin', adminRoutes); // Using the routes defined in the routes/admin.js by order - the order matters
app.use('/', groupRoutes); // Using the routes defined in the routes/group-it.js by order - the order matters

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
// I am trying to edit in order to push trough VS-code
app.listen(3000);