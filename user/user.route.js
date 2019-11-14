var express = require('express');

var userRoute = express.Router();

var userController = require('./user.controller')

userRoute.post('/add/user', userController.addUSer);

userRoute.post('/login/user',userController.login)

module.exports = userRoute;