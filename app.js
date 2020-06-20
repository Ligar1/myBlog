const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/myBlog",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("mongo connected")
})
.catch((err) => {
    console.log("Could not connect to database")
})


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "app_server", "views"))
app.use(express.static(path.join(__dirname + '/public')))

const indexRouter = require("./app_server/routes/indexRoute")
app.use(indexRouter)

app.listen(PORT, () =>{
    console.log("server running")
})