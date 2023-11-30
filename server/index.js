const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require("dotenv").config({path : "./config/.env"})
require("./config/db")
const {checkUser, requireAuth} = require(".middleware/auth.middleware")
const cors = require("cors")
const FansRoutes = require("./routes/fans.routes")
const usersRoutes = require("./routes/users.routes")

app.use(cors({origin: process.env.CLIENT_URL}))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    "allowedHeaders": ["sessionId", "content-type"],
    "exposedHeaders": ["sessionId"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false
}

app.use(cors(corsOptions))
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.get("*", checkUser())

app.get("*", checkUser)
app.get("jwtid", requireAuth, (res) => {
    res.status(200).send(res.locals.user_id)
})

app.use("api/users", usersRoutes)
app.use("api/fans", FansRoutes)

app.listen(process.env.PORT, () => {
    console.log(`On réceptionne sur ${process.env.PORT}`)
})