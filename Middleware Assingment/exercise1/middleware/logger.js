const path = require('path');
const rfs = require('rotating-file-stream');

const logDirectory = path.join(__dirname, '../logs');

// create rotating stream (daily rotation)
const stream = rfs.createStream('requests.log', {
    interval: '1d',
    path: logDirectory
});

const logger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        // skip error logs (handled separately)
        if (res.statusCode >= 400) return;

        const responseTime = Date.now() - start;

        const log = `${new Date().toISOString()} | ${req.ip} | ${req.method} | ${req.url} | ${res.statusCode} | ${responseTime}ms | ${req.headers['user-agent']}\n`;

        stream.write(log);
    });

    next();
};

module.exports = logger;