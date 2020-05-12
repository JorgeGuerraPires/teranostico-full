//----------------------------------------------
const passport = require("passport");
const util = require("../utils/utils");
//-------------------------------------------


const login = function (req, res) {
    passport.authenticate("local", { session: false }, (err, user, info) => {
        //Should anything go wrong
        if (err) {
            /** HTTP 404, 404 Not Found, 404, Page Not Found, or Server Not Found */
            util.sendJSONresponse(res, 404, err);
            return;
        }
        //-------------------------
        if (user) {
            //if found an user and passwork is correct
            const token = user.generateJwt(); //send a token, it will be stored locally in the browser
            const refreshToken = user.generateRefreshToken();

            util.sendJSONresponse(res, 200, {
                token: token,
                refreshToken: refreshToken,
            });
        } else {
            /**401 UNAUTHORIZED */
            util.sendJSONresponse(res, 401, info);
        }
    })(req, res); //Makes sure that req and res are available to Passport
    //-----------------------------------------------------------------
}//end of login



module.exports = { login }