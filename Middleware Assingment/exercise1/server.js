const express = require('express');
const logger = require('./middleware/logger');
const errorLogger = require('./middleware/errorLogger');
const morgan = require('morgan');

const app = express();

// built-in middleware
app.use(express.json());

// your custom logger
app.use(logger);

// morgan (industry standard logger)
app.use(morgan('combined'));

// routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/test', (req, res) => {
    res.send('Test Route');
});

app.post('/login', (req, res) => {
    res.json({ message: 'User logged in' });
});

// error route for testing
app.get('/error', (req, res) => {
    throw new Error('Test error');
});

// error middleware (ALWAYS LAST)
app.use(errorLogger);

// start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});