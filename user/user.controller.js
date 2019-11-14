var sha256 = require('sha256');
var userService = require('./user.service')
var jwt = require('jsonwebtoken');

var userController = {
    addUSer: async (req, res) => {
        try {
            let bodyData = req.body;
            let pwd = bodyData.password
            bodyData.password = sha256(pwd);

            let result = await userService.addUser(bodyData)

            res.send({
                code: 200,
                message: 'Successfully user added',
                data: result
            })
        } catch (error) {
            res.send({
                code: 400,
                message: 'Error in adding user'
            })
        }
    },
    login: async (req, res) => {
        try {

            let bodyData = req.body;
            let pwd = bodyData.password;

            let check_pwd = bodyData.password = sha256(pwd);

            let user_info = await userService.userInfo(bodyData.username)

            if (user_info) {
                if (check_pwd == user_info.password) {

                    delete user_info.password;

                    var token = await jwt.sign({
                        payload: user_info
                    }, 'keepitsecert', {
                        expiresIn: '1d'
                    });
                    res.send({
                        code: 200,
                        message: 'Login Success',
                        token
                    })
                } else {
                    res.send({
                        code: 401,
                        message: 'Password is wrong',
                    })
                }

            } else {
                res.send({
                    code: 401,
                    message: 'Username not found'
                })
            }
        } catch (error) {
            res.send({
                code: 400,
                message: 'error',
                data: error
            })
        }
    }
}

module.exports = userController;