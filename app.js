const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./router/admin');

const app = express();

// building a body parser for each request 
// this body-parser is for parsing the body of the request using form and buttons, files 
// will be needed a different parser.
app.use(bodyParser.urlencoded({ extended: false }));

/*
app.get or app.post is used to handle the request get/post accordingly.
*/

// app.use gets a function with args (req, res, next) and execute the middleware for the request
// in-order

app.use(adminRoutes); // Using the routes defined in the routes/admin.js by order - the order matters

app.listen(3000);