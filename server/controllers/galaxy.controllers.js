/**
 * This controller holds all the methods related to Galaxy
 */

//---------------------------------------------------------
const mongoose = require("mongoose");
const galaxyConnection = require("../models/galaxy");//this will give access to the Galaxy dataset
const util = require("../utils/utils");
const authUtils = require("../config/auth");
//-------------------------------------------------------

//------------------------------------------------------
//This will create a schema and connection with Mongo
var Schema = new mongoose.Schema({})
var model1 = galaxyConnection.logDB.model('pttcs', Schema);
//-------------------------------------------------------

/**
 * @description {this function is responsible for providing retrieving gene targets saved in our database}
 * @param {*} req 
 * @param {*} res 
 */
const getgeneArray = function (req, res) {

    //-----------------------------------------------------------------------------------
    const secret = process.env.encryption_sensitive_patient_information;
    const hashedPatientId = authUtils.hashPassword(req.params.id, secret); //hash the patient id
    //-----------------------------------------------------------------------------------
    console.log(hashedPatientId);

    model1.findOne({ patientId: `${hashedPatientId}` })
        .then((all) => {
            if (all)
                util.sendJSONresponse(res, 200, all);
            else
                util.sendJSONresponse(res, 404, { error_msg: "No gene targets for this patient. Maybe it has not yet been submitted" });
        });

}

module.exports = { getgeneArray }