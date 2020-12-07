//----------------------------------------
//database related
const mongoose = require("mongoose");
const FinalReport = mongoose.model("FinalReport");
const User = mongoose.model("User");
const Patient = mongoose.model("Patient");
//---------------------------------------

//--------------------------------------
const authUtils = require("../config/auth");
//-------------------------------------

//-------------------------------------
//imports
const util = require("../utils/utils");
//-------------------------------------


//------------------------------------------------------------
const saveFinalReportHeader = function (req, res) {
    /**General steps:
      * - Save to Mongo;
      * - Save the form id to the user that submitted 
      */
    // console.log(req.body.patient);

    if (!req.body.patient.patientid)
        return util.sendJSONresponse(res, 400, { message: `Sorry, no patient informed` });

    //-----------------------------------------------------------------------------------
    const secret = process.env.encryption_sensitive_patient_information;
    const hashedPatientId = authUtils.hashPassword(req.body.patient.patientid, secret); //hash the patient id
    //-----------------------------------------------------------------------------------



    Patient.findOne({ patientID: hashedPatientId })
        .then((found) => {
            if (found) {
                FinalReport.create(req.body)
                    .then((created) => {

                        created.patientid = hashedPatientId;
                        //----------------------------------------------------
                        //Save a reference to the current user
                        User.findById(req.user._id)
                            .then((found) => {
                                found.finalReport_Submitted.push(created._id);
                                created.submittedBy = found.name;
                                created.save();
                                found.save();
                            });
                        //--------------------------------------------------

                        //------------------------------------------------
                        found.finalreport.push(created);
                        found.save();
                        //-----------------------------------------------

                        util.sendJSONresponse(res, 200, { success_msg: `Patient with id ${req.body.patient.patientid} saved with success` });
                    })
            }
            else
                util.sendJSONresponse(res, 400, { message: `Sorry, we could not save since there is no patient with this id` });
        })
        .catch((err => console.log(err)))



}
//-------------------------------------------------------------


//-----------------------------------------------------------
const getFinalReportById = function (req, res) {

    // console.log(req.params.id)
    FinalReport.findById(req.params.id)
        .then(found => {
            util.sendJSONresponse(res, 200, found);
        });
}
//---------------------------------------------------------


//--------------------------------------------------
module.exports = { saveFinalReportHeader, getFinalReportById }
//-------------------------------------------------