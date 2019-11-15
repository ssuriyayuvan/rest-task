var config = require('./config');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const connectDb = async () => {
    let host = config.mongo.host
    let port = config.mongo.port
    let username = config.mongo.username
    let password = config.mongo.password
    let database_name = config.mongo.database_name

    let connectQuery = `mongodb://${host}:${port}/${database_name}`

    try {
        mongoose.connect(connectQuery, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, res) => {
            if (res) {
                console.log('DB Connected')
            } else {
                console.log('err', err)
            }
        });
    } catch (error) {
        console.log('Db not connected', error)
        throw error
    }
}

module.exports = connectDb;