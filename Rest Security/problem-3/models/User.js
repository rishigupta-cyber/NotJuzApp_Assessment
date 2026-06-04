const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        required: true
    },

    mfaEnabled: {
        type: Boolean,
        default: false
    },

    mfaSecret: {
        type: String,
        default: null
    },

    failedLoginAttempts: {
        type: Number,
        default: 0
    },

    lockUntil: {
        type: Date,
        default: null
    },

    lastLogin: {
        type: Date,
        default: null
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);