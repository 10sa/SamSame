/* Load default modules */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

// Is Right Directory?

/* Configure Setting */
const config = require('./config')();
// const option = config.httpsOption;

/* Express Setting */
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.raw());

/* Api Router */
const api = require('./api');
app.use('/', api);

/* Run Server */
http.createServer(app).listen(
    process.env.HTTP_PORT, 
    () => {
        console.log('Http server starts on port ' + 
            process.env.HTTP_PORT);
    }
);
/*
https.createServer(option, app).listen(
    process.env.HTTPS_PORT,
    () => {
        console.log('Https server starts on port' +
            process.env.HTTPS_PORT);
    }
);
*/