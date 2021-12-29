exports.getLogin = (req, res, next) =>{
    res.status(200).render('login', {pageTitle: "Login"});
}

exports.getSignUp = (req, res, next) =>{
    res.status(200).render('sign-up',{pageTitle: "Sign-Up"});
}