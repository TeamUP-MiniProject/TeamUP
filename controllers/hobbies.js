
exports.getHobbies = (req, res, next ) =>{
    res.status(200).render('index', {})
}

exports.getHomePage = (req, res, next) => {
    res.status(200).render('index', {pageTitle: "Home Page"});
}

exports.getMyHobbies = (req,res,next) => {
    res.status(200).render('my-interests', {pageTitle: "My Interests"});
}