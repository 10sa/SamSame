/* Load default modules */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Configure Setting */
require('./config')();

/* Express Setting */
app.use(body)