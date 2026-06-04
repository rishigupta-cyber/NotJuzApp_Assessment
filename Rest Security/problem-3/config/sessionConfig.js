const session = require("express-session");
const MongoStore = require("connect-mongo");

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env file");
}

if (!process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET is missing in .env file");
}

module.exports = session({
    name: "edulearn.sid",

    secret: process.env.SESSION_SECRET,

    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "sessions"
    }),

    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24
    }
});