const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// building a body parser for each request 
// this body-parser is for parsing the body of the request using form and buttons, files 
// will be needed a different parser.
app.use(bodyParser.urlencoded({ extended: false }));

/*
app.get or app.post is used to handle the request get/post accordingly.
*/
start_path = "/personal_page";
app.use(start_path, (req,res,next) => { 
    res.send('<form action="/" method="POST"><input type="text" name="private_name"><button type="submit">Add User Name</button></form> ');
    // res.redirect("/hobbies");   redirects to a different path.
 });
// app.use gets a function with args (req, res, next) and execute the middleware for the request
// in-order
app.use((req,res,next) => { 
    console.log(req.body);
    res.send('<h6>Hello from middleware 1</h6>');
    next() // Allows the request to continue to the next middleware in line
    
});


app.listen(3000);