/* Load default modules */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Configure Setting */
require('./config')();

/* Express Setting */
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.raw());

// Add api Router