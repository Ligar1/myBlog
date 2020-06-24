const User = require("../models/UserModel")
const passport = require("passport")
const signForm = (req, res) => {
    res.render("signup")
}

const signupCtrl = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let newUser = new User({username, email})
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err)
        }
        res.redirect("/ligar")
        console.log(user)
    })    
}

const loginForm = (req, res) => {
    res.render("login")
}

const logOut = (req, res) => {
    req.logOut()
    res.redirect("/ligar/user/login")
}

module.exports ={
    signForm,
    signupCtrl,
    loginForm,
    logOut
}