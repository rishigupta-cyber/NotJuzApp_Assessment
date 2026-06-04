const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = require("./config/corsConfig");
const sessionConfig = require("./config/sessionConfig");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const messageRoutes = require("./routes/messageRoutes");
const profileRoutes = require("./routes/profileRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(sessionConfig);

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/messages", messageRoutes);
app.use("/profile", profileRoutes);
app.use("/comments", commentRoutes);

app.get("/",(req,res)=>{
    res.send("hello world");
    
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});