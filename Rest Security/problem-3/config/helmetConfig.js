const helmet = require("helmet");

module.exports = helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],

            scriptSrc: [
                "'self'",
                "https://js.stripe.com",
                "https://www.google-analytics.com"
            ],

            styleSrc: [
                "'self'",
                "'unsafe-inline'"
            ],

            imgSrc: [
                "'self'",
                "data:",
                "https://*.amazonaws.com",
                "https://www.google-analytics.com"
            ],

            mediaSrc: [
                "'self'",
                "https://*.amazonaws.com"
            ],

            frameSrc: [
                "'self'",
                "https://js.stripe.com",
                "https://checkout.stripe.com",
                "https://www.youtube.com"
            ],

            connectSrc: [
                "'self'",
                "https://api.stripe.com",
                "https://www.google-analytics.com"
            ],

            objectSrc: ["'none'"],

            upgradeInsecureRequests: []
        }
    },

    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },

    frameguard: {
        action: "sameorigin"
    },

    noSniff: true,
    hidePoweredBy: true,
    referrerPolicy: {
        policy: "strict-origin-when-cross-origin"
    }
});