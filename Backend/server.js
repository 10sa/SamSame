'use strict'
/* basic modules */
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

/* dev modules */
const morgan = require('morgan')

/* custom modules */
require('./config')(app)
const error = require('./error/index')
const apis = require('./routes/apis/index')
const views = require('./routes/views/index')

/* express setting */
app.use(express.static(app.get('FRONT_PATH')))
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extend: false }))

/* routing */
app.use('/', views)
app.use('/apis', apis)

/* server listening */
// app.get('UPPERCASE')
const port = app.get('PORT')
http.createServer(app).listen(port, () => {
    console.log(`Server stating on port ${port}`)
})

/* error processing */
app.use(error)