var router = [];

var userRoute = require('./user/user.route');
var userExpRoute = require('./user-experience/user-exp.route');

router.push(userRoute);
router.push(userExpRoute);

module.exports = router;