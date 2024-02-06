const express = require("express")
const path = require("path")
const app = express()
require("./db/conn");

const Register = require("./models/registers")
const port = process.env.PORT || 3000
const static_path = path.join(__dirname, "../public")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("index")
})
// create a new user in our database
app.post("/index", async (req, res) => {
    try {
        const registerUserDetails = new Register({
            Username: req.body.username,
            Password: req.body.psd,
            Email: req.body.emailAddress,
            ContactNumber: req.body.conNum,
            Gender: req.body.gender,
            Address: req.body.add
        })
        const register = await registerUserDetails.save();
        res.statsus(201).render(index)
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port, () => {
    console.log(`Server is running at port number ${port}`)
})