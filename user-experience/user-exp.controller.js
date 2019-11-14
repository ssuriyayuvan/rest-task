var userExpService = require('./user-exp.service');
var jwt = require('jsonwebtoken');

var userExpController = {
    verifyToken: async (req, res, next) => {
        try {
            let token = req.headers.token;
            if (token) {
                jwt.verify(token, 'keepitsecert', (err, decode) => {
                    if (err) {
                        res.send({
                            code: 400,
                            message: 'Invalid Token',
                        })
                    } else {
                        return next();
                    }
                })
            } else {
                res.send({
                    code: 400,
                    message: 'Token not Found',
                })
            }


        } catch (error) {
            console.log(error)
        }
    },
    addExperience: async (req, res) => {
        try {

            let user_id = req.params.user_id;

            let bodyData = req.body;

            bodyData.user_id = user_id;

            let result = await userExpService.addExperience(bodyData)

            res.send({
                code: 200,
                message: 'Successfully experience added',
                data: result
            })

        } catch (error) {
            res.send({
                code: 400,
                message: 'Error in adding experience',
                data: error
            })
        }
    },
    getExperienceByUser: async (req, res) => {
        try {

            let user_id = req.params.user_id;

            let result = await userExpService.getExperienceByUser(user_id)

            res.send({
                code: 200,
                message: 'Successfully experience retrived',
                data: result
            })

        } catch (error) {
            res.send({
                code: 400,
                message: 'Getting Error While retrive Experience',
                data: error
            })
        }
    },
    editExperience: async (req, res) => {
        try {

            let id = req.params.id;

            let bodyData = req.body;

            let check_exp_update = await userExpService.check_exp(id, bodyData)

            res.send({
                code: 200,
                message: 'Successfully Experience Update',
                data: check_exp_update
            })

        } catch (error) {
            res.send({
                code: 400,
                message: 'Error',
                data: error
            })
        }
    },
    deleteExpreience: async (req, res) => {
        try {

            let id = req.params.id;

            let delete_exp = await userExpService.deleteExpreience(id)

            res.send({
                code: 200,
                message: 'Successfully delete',
                data: delete_exp
            })

        } catch (error) {
            res.send({
                code: 400,
                message: 'Error',
                data: error
            })
        }
    },
    deleteAllExpreienceForUser: async (req, res) => {
        try {

            let id = req.params.user_id;

            let delete_exp = await userExpService.deleteAllExpreienceForUser(id)

            res.send({
                code: 200,
                message: 'Successfully delete experience for that user',
                data: delete_exp
            })

        } catch (error) {
            res.send({
                code: 400,
                message: 'Error',
                data: error
            })
        }
    },
}

module.exports = userExpController;