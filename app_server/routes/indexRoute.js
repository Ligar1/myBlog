const express = require("express")
const router = express.Router()
const indexCtrl = require("../controllers/indexCtrl")

router.get("/ligar", indexCtrl.home)

router.get("/", (req, res) => {
    res.redirect("/ligar")
})


module.exports = router