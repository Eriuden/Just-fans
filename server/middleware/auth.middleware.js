const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

module.exports.checkUser = (req, res, next) => {
    const token = res.cookie.jwt 
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err,decodedToken) => {
            if (err) {
                res.locals.user = null
                res.cookie("jwt", "", {maxAge:1})
                next()
            } else {
                let user = await userModel.findByIdAndUpdate(decodedToken)
                res.locals.user = user
                next()
            }
        })
        
    }
}

module.exports.requireAuth = (req,next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err)
            } else {
                console.log(decodedToken.id)
                next()
            }
        })
    } else {
        console.log("pas de token")
    }
}