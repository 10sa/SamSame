const mongoose = require('mongoose');

const db_host = 'localhost';
const db_name = 'testA';

const HTTP_PORT = 80;
const HTTPS_PORT = 443;

module.exports = () => {
    function connectMongo(host, name) {
        return 'mongoDB://' + host + '/' + name;
    }

    mongoose.connect(connectMongo(db_host, db_name));
    require('./../schemas/index')(); // Load Schema

    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
        console.log('Success connecting to MongoDB');
    });

    let port = { };
    port.http = HTTP_PORT || process.env.port;
    port.https = HTTPS_PORT || process.env.port;

    return {
        port : port
    };
}