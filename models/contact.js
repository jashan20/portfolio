const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var classSchema = new Schema({
    name: {
        type: String,
        maxlength: 16,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

},{timestamps:true});

module.exports = mongoose.model("Contact",classSchema);