const fanModel = require("../models/fans.model")
const ObjectId = require("mongoose").Types.ObjectId
const fs = require("fs")
const {promisify} = require("util")
const {uploadErrors} = require("../utils/errors.utils")
const pipeline = promisify(require("stream"))

module.exports.readFan = (res) => {
    fanModel.find((err,docs)=> {
        if (!err) res.send(docs)
        else console.log("Erreur de réception:" + err)
    }).sort({createdAt: -1})
}

module.exports.createFan = async (req,res) => {
    let fileName

    if (req.file != null) {
        try {
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg"
            )
            throw Error("fichier invalide")

            if (req.file.size > 500000) throw Error ("Taille maximale dépassée")
        } catch(err) {
            const errors = uploadErrors(err)
            return res.status(201).json({err})
        }
        fileName = req.body._id + Date.now() + ".jpg"

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/fanImage/${filename}`
            )
        )
    }
    
    const newFan = new fanModel({
        picture: req.file != null ? "./uploads/gunplaImage" + fileName :"",
        name: req.body.name,
        price: req.body.price
    })

    try {
        const fan = await newFan.save()
        return res.status(201).json(fan)
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports.updateFan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    const updatedRecord = {
        picture: req.body.picture,
        name: req.body.name,
        price: req.body.price,
    }

    fanModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord},
        {new:true},
        (err,docs) => {
            if (!err) res.send(docs)
            else console.log("erreur de MAJ:" + err)
        }
    )
}

module.exports.deleteFan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    fanModel.findByIdAndDelete(req.params.id, (err,docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur lors de la supression:" + err)
    })
}