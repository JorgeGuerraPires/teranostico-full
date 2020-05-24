var express = require('express');
var router = express.Router();
const adminUsers = require("../controllers/admin.controllers");

/* GET home page. */
router.get('/getallusers', adminUsers.getAllUsers);

/**api/admin/deleteUserById */
router.delete("/deleteuserbyid/:id", adminUsers.deleteUserById)

router.post("/resetpassword/:id", adminUsers.resetpassword)



module.exports = router;
