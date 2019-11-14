var userExpModel = require('../models/user-exp.model');

var userExpService = {
    addExperience: async (data) => {
        try {
            let save_data = new userExpModel(data);

            let result = await save_data.save();

            return result

        } catch (error) {
            console.log(error)
        }
    },
    getExperienceByUser: async (id) => {
        try {

            let result = await userExpModel.find({
                'user_id': id
            })

            return result

        } catch (error) {
            console.log(error)
        }
    },

    check_exp: async (id, data) => {
        try {

            let result = await userExpModel.findByIdAndUpdate({
                '_id': id
            }, data, {
                strict: true,
                new: true
            });

            return result

        } catch (error) {
            console.log(error)
        }
    },
    deleteExpreience: async (id) => {
        try {

            let result = await userExpModel.findByIdAndDelete({
                '_id': id
            });

            return result

        } catch (error) {
            console.log(error)
        }
    },
    deleteAllExpreienceForUser: async (id) => {
        try {

            let result = await userExpModel.deleteMany({
                'user_id': id
            });

            return result

        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = userExpService;