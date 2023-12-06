const router = require("express").Router()
const fanController = require("../controllers/fan.controller")
const multer = require("multer")
const upload = multer()

router.get("/", fanController.readFan)
router.post("/", upload.single("file"), fanController.createFan)
router.put("/:id", fanController.updateFan)
router.delete("/:id", fanController.deleteFan)