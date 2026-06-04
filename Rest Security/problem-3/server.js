require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("Database Connection Failed:", err.message);
    process.exit(1);
});

process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err.message);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED REJECTION:", err.message);
    process.exit(1);
});