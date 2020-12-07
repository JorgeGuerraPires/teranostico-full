//-----------------------------------------------------
const mongoose = require("mongoose");
const Samples = mongoose.model("SendingSamples");
const Patient = mongoose.model("Patient");
//-------------------------------------------------------

//----------------------------------------------------
const util = require("../utils/utils");
const authUtils = require("../config/auth");
//--------------------------------------------------

const sampleSendingDetails = function (req, res, next) {

    if (!req.body.patientid)
        util.sendJSONresponse(res, 400, { message: "no patient id informed" });

    //-----------------------------------------------------------------------------------
    const secret = process.env.encryption_sensitive_patient_information;
    const hashedPatientId = authUtils.hashPassword(req.body.patientid, secret); //hash the patient id
    //-----------------------------------------------------------------------------------
    console.log(hashedPatientId)

    Patient.findOne({ patientID: hashedPatientId })
        .then((found) => {
            if (found) {//patient already exist, just add this sample information to his information
                //-------------------------------------------------------
                Samples.create(req.body)
                    .then((samplesCreated) => {
                        //--------------------------------------------
                        samplesCreated.patientid = authUtils.hashPassword(req.body.patientid, secret); //hash the patient id
                        samplesCreated.save();
                        //-------------------------------------------


                        //---------------------------------------------
                        found.samplesInfo.push(samplesCreated);
                        found.save();
                        //---------------------------------------------
                        util.sendJSONresponse(res, 200,
                            { success_msg: "This patient already exist in our system, we added this info to his/her profile!" });

                    })
                    .catch((err) => console.log(err));
                //----------------------------------------------------

            }
            else {//the patient does not exist, create the patient and add this information to his profile

                Patient.create({ patientID: authUtils.hashPassword(req.body.patientid, secret) })
                    .then((created) => {
                        //-------------------------------------------------------
                        Samples.create(req.body)
                            .then((samplesCreated) => {
                                //--------------------------------------------
                                samplesCreated.patientid = authUtils.hashPassword(req.body.patientid, secret); //hash the patient id
                                samplesCreated.save();
                                //-------------------------------------------


                                //---------------------------------------------
                                created.samplesInfo.push(samplesCreated);
                                created.save();
                                //---------------------------------------------
                                util.sendJSONresponse(res, 200,
                                    { success_msg: "This patient does not exist in our system, we created it for you and added this info to his/her profile!" });

                            })
                            .catch((err) => console.log(err));
                        //----------------------------------------------------


                    })
                    .catch((err) => console.log(err));


            }
        })
        .catch((err) => console.log(err));




}


module.exports = { sampleSendingDetails }