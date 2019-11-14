var express = require('express');
var app = express();
var settings = require('./settings');
// import settings from './settings'
var port = settings.port;
var db = require('./config/database.config');
var router = require('./router');
var bodyparser = require('body-parser')

db();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

router.forEach(function (route) {
    app.use('/api', route);
})

app.listen(port, () => {
    console.log('App runnning in ', port);
})