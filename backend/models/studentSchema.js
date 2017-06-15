var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({

    ID: {
        type: Number,
        required: true
    },
    Cours: {
        type: String,
        enum: ["Computer", "English", "Arabic"]
    },

    FullName: {
        type: String,
        requireed: true
    },
    Age: {
        type: Number,
        requireed: true
    },
    Date: {
        type: Date,
        requireed: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    married: {
        type: String,
        enum: ["Single", "Married"]
    },

});
module.exports = mongoose.model("student", studentSchema);