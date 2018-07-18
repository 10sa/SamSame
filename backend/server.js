'use strict'
/* basic modules */
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/* dev modules */
const morgan = require('morgan')

/* custom modules */
require('./config')(app)
const error = require('./error/index')
const routes = require('./routes/index')

/* express setting */
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extend: false }))

/* routing */
app.use('/', routes)

/* server listening */
// app.get('UPPERCASE')
const port = app.get('PORT')
http.createServer(app).listen(port, () => {
    console.log(`Server stating on port ${port}`)
})

/* error processing */
app.use(error)