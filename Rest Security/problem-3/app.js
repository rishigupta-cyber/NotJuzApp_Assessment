const express = require("express");
const helmetConfig = require("./config/helmetConfig");
const sessionConfig = require("./config/sessionConfig");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const quizRoutes = require("./routes/quizRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmetConfig);
app.use(sessionConfig);

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "EduLearn Secure Server Running"
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: err.message
    });
});

module.exports = app;