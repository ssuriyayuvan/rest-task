var express = require('express');

var userExpRoute = express.Router();

var userExpController = require('./user-exp.controller');

userExpRoute.get('/get/experience/:user_id',userExpController.verifyToken,userExpController.getExperienceByUser);

userExpRoute.post('/add/experience/:user_id', userExpController.verifyToken, userExpController.addExperience);

userExpRoute.patch('/edit/experience/:id', userExpController.verifyToken, userExpController.editExperience);

userExpRoute.delete('/delete/experience/:id',userExpController.verifyToken,userExpController.deleteExpreience);

userExpRoute.delete('/delete/all/user/experience/:user_id',userExpController.verifyToken,userExpController.deleteAllExpreienceForUser)

module.exports = userExpRoute;