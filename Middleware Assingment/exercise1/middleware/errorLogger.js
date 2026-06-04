const fs = require('fs');
const path = require('path');

const errorLogPath = path.join(__dirname, '../logs/errors.log');

const errorLogger = (err, req, res, next) => {
    const log = `${new Date().toISOString()} | ${req.ip} | ${req.method} | ${req.url} | ${err.message}\n`;

    fs.appendFile(errorLogPath, log, (e) => {
        if (e) console.error(e);
    });

    res.status(500).send('Internal Server Error');
};

module.exports = errorLogger;