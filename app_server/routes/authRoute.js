const express = require("express")
const router = express.Router()
const authCtrl = require("../controllers/authCtrl")
const User = require("../models/UserModel")
const passport = require("passport")


router.get("/ligar/user/signup", authCtrl.signForm)

router.post("/ligar/user/signup", authCtrl.signupCtrl)

router.get("/ligar/user/login", authCtrl.loginForm)

router.post("/ligar/user/login", passport.authenticate("local", {
    successRedirect: "/ligar",
    failureRedirect: "/afrilancer/login"
}))

router.get("/ligar/user/logout", authCtrl.logOut)


module.exports = router 

