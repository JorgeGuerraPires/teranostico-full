var express = require('express');
var router = express.Router();
const ctrlUsers = require("../controllers/users");


/* login 
endpoint: /api/users/login
*/
router.post('/login', ctrlUsers.login);

module.exports = router;
