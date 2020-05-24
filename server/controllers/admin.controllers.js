/**Keep here all the methods that demand administration credentials */


//----------------------------------------
//database related
const mongoose = require("mongoose");
const User = mongoose.model("User");
//---------------------------------------

//------------------------------------------
//Miscellaneous
const util = require("../utils/utils");

//----------------------------------------




const getAllUsers = function (req, res) {

    User.find().then((result) => {
        const info = [];

        result.forEach((element) => {
            info.push({
                name: element.name,
                typeOfAccount: element.kind ? element.kind : "general account",
                _id: element._id,
                email: element.email,
                resetpassword: element.resetpassword,
            });
        });
        util.sendJSONresponse(res, 200, info);
    });

}

const deleteUserById = function (req, res) {

    User.findByIdAndDelete(req.params.id)
        .then((removed, err) => {
            util.sendJSONresponse(res, 200, removed);
            if (err) util.sendJSONresponse(res, 400, err);
        })
        .catch((err) => util.sendJSONresponse(res, 400, err));
}

/**this method just created a token on the user account, for being
 * used by the user as a reset password validation 
 */
const resetpassword = function (req, res) {

    User.findById(req.params.id)
        .then(user => {
            const token = user.generateTokenResetPassword();

            user.save().then(() =>
                util.sendJSONresponse(res, 200, { token: token }
                )
            )
        })

}

module.exports = { getAllUsers, deleteUserById, resetpassword }