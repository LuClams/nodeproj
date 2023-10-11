const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: {
        type: String,
        required : "Le titre est requis"
    },
    message: {
        type: String,
        required : "Le contenu est requis"
    },
    created_at: {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Comment', commentSchema);