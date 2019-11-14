var userModel = require('../models/user.model');
var sha256 = require('sha256')
var userService = {
    addUser: async (data) => {
        try {
            
            let save_data = new userModel(data)

            let result = await save_data.save();

            return result;
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    userInfo: async (username) => {
        try {

            let result = await userModel.findOne({
                'username': username
            }).lean()

            return result;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports = userService;