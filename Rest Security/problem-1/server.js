require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const helmet = require("helmet");

const connectDB = require("./config/db");
const { loginLimiter, apiLimiter } = require("./middleware/rateLimiter");

const app = express();
connectDB();

app.use(express.json());

// Helmet
app.use(helmet());

// Session (MongoStore)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));

// Rate limit
app.use("/api", apiLimiter);
app.use("/api/auth/login", loginLimiter);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

app.listen(5000, () => console.log("Server running"));