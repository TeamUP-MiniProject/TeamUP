const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const mongoConnect = require('./util/database')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

/* If decided to use a template engine e.g. pug then these lines should be uncommented
if using Handlebars or EJS
any engine should be installed using npm install e.g. npm install ejs
const expressHbs = require('express-handlebars');
app.engine('handlebars', expressHbs);

app.set('view engine', 'pug');
app.set('views', 'views'); - this is optional because our views-folder is already named views
*/
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

//app.use('/admin', adminx§Routes); // Using the routes defined in the routes/admin.js by order - the order matters
app.use('/', authRoutes);
app.use('/', groupRoutes); // Using the routes defined in the routes/group-it.js by order - the order matters

// Connect to MongoDB
