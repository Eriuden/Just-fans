const mongoose = require("mongoose")

const fanSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
            required: true 
        },

        name: {
            type: String,
            trim: true,
            maxlength: 200
        },

        price: {
            type: String,
            trim: true,
            maxlength: 5
        },
    },

    {timestamps: true}
)

const fanModel = mongoose.model("fans", fanSchema)
module.exports = fanModel