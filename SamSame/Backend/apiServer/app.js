/* Load default modules */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

/* Configure Setting */
const conf = require('./config')();
const port = conf.port;

/* Express Setting */
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

/* Api Router */
const api = require('./routes/index');
app.use('/', api);

/* Run Server */
http.createServer(app).listen(port.http, () => {
    console.log('Http server starts on port ' + port.http);
});

/*
https.createServer(option, app).listen(
    process.env.PORT_HTTPS,
    () => {
        console.log('Https server starts on port' +
            process.env.PORT_HTTPS);
    }
);
*/

if (process.env.NODE_ENV == "production") {
    console.log('Productino Mode');
} else if (process.env.NODE_ENV == "development") {
    console.log('Debug Mode');
}