const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    quizId: {
        type: String,
        required: true
    },

    answers: {
        type: Array,
        required: true
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Quiz", quizSchema);