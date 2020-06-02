/**
 * This is dedicated to controlllers related to
 * the patient main form, the ones sent alongside the samples
 */

//-----------------------------------------------------
const mongoose = require("mongoose");
const FormPatient = mongoose.model("FormPatient");
//-------------------------------------------------------

//------------------------------------------------------

//------------------------------------------------------------
//Form id, this is the first part of the form
const formidSave = function (req, res, next) {
    // console.log("here on formidSave ")
    // let errors = [];

    // const {
    //     emaildr,
    //     patientid,
    //     levelofprivacy,
    //     serverConsent,
    //     patientidSecret,
    // } = req.body;

    // //-----------------------------------Entered info check------------
    // //check required fields
    // if (!emaildr) {
    //     errors.push({
    //         msg: "Your form was not salve. Please enter an email for the responsible",
    //     });
    // }

    // if (!patientid) {
    //     errors.push({
    //         msg:
    //             "Your form was not salve. Please enter an id for the patient. It should be at least 6 characters long",
    //     });
    // } else if (patientid.length < 6) {
    //     errors.push({
    //         msg: "Your form was not salve. patient id must be at least 6 characters",
    //     });
    // }
    // //-----------------------------------------------------------------------------------
    // if (errors.length > 0) {
    //     return util.sendJSONresponse(res, 400, errors);
    // } else {
    //     /**if we arrive here, it means we double-checked all the issues,
    //      * and everything is set, just save the patient info */
    //     let secret;
    //     if (patientidSecret.length > 0) secret = patientidSecret;
    //     else secret = process.env.encryption_sensitive_patient_information;

    //     const hashedPatientId = authUtils.hashPassword(patientid, secret); //hash the patient id

    //     //-------------------------------------------------------
    //     //try to find the patient, if not, create a new one
    //     Patient.findOne({ patientID: hashedPatientId })
    //         .populate("informationForm")
    //         .then(async (patient) => {
    //             if (patient) {
    //                 //see if the patient already exists. If patient exists, add this form to his history

    //                 /**if patient already exists, no need to create a Doctor,
    //                  * since it is created when the patient is created */

    //                 patient.informationForm.push(
    //                     //-------------------------------------
    //                     await Form.create({
    //                         formid: {
    //                             patient: patient._id, //save the patient id in the just created formid
    //                             privacy: { levelofprivacy, serverConsent },
    //                         },
    //                     })
    //                         .then((formCreated) => {
    //                             formVariable.id = formCreated._id; //this is the first method to access the form, so it creates the form and stores locally the id for later access!

    //                             return formCreated._id;
    //                         })
    //                         .catch((err) => {
    //                             console.log(err);
    //                             //return util.sendJSONresponse(res, 400, err);
    //                         })
    //                     //-----------------------------------------
    //                 );

    //                 //----------------------------------------------------------
    //                 /**When the patient already exists, no need to insert the doctor, it is already inserted when created
    //                  * Further, when created, it is also added to the doctors list
    //                  */

    //                 //-----------------------------------------------------------

    //                 patient
    //                     .save()
    //                     .then(() => {
    //                         return util.sendJSONresponse(res, 200, {
    //                             success_msg: `We spot the patient with id ${patientid} in our database. We will add this new form to his history!`,
    //                         });
    //                     })
    //                     .catch((err) => console.log(err));
    //             } else {
    //                 //if no patient, creates a new one, and add the form to his forms history
    //                 Patient.create({
    //                     patientID: hashedPatientId,
    //                     informationForm: [],
    //                 }).then((created) => {
    //                     Form.create({
    //                         formid: {
    //                             //emaildr,
    //                             patient: created._id,
    //                             privacy: { levelofprivacy, serverConsent },
    //                         },
    //                     })
    //                         .then((formCreated) => {
    //                             formVariable.id = formCreated._id; //this is the first method to access the form, so it creates the form!
    //                             created.informationForm.push(formCreated._id); //save the form id, as so we can use populate later

    //                             //------------------------------------------------
    //                             Doctor.insertPatient(emaildr, created);
    //                             //----------------------------------------------------

    //                             return util.sendJSONresponse(res, 200, {
    //                                 success_msg: `Form salved to patient with id ${patientid}!`,
    //                             });
    //                         })
    //                         .catch((err) => {
    //                             console.log(err);
    //                             //return util.sendJSONresponse(res, 400, err);
    //                         });
    //                 });
    //                 //-----------------------------------------------
    //             } //end of else

    //             //-----------------------------------------------
    //         }) //end of patient found
    //         .catch((err) => console.log(err));

    //     //------------------------------------------------------
    // } //end of else that no error was found
}; //end of formidSave
//-----------------------------------------------------


//-------------------------------------------
//salving the address details for send the samples
const sampleSendingDetails = function (req, res, next) {

    // console.log("here on sampleSendingDetails")

    const {
        recipient,
        service,
        trackingNumber,
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        postalcode,
        phoneNumber,
        email,
    } = req.body;

    // //console.log(formVariable.id);
    // //-------------------------------------------------------------------
    // //Updating
    // Form.updateOne(
    //     { _id: formVariable.id },
    //     {
    //         $set: {
    //             sampleSendingDetails: {
    //                 recipient,
    //                 service,
    //                 trackingNumber,
    //                 // //}
    //                 // //sender: {
    //                 firstName,
    //                 lastName,
    //                 address1,
    //                 address2,
    //                 city,
    //                 state,
    //                 postalcode,
    //                 //},
    //                 //contactinfo: {
    //                 phoneNumber,
    //                 email,
    //                 //}
    //             },
    //         },
    //     },
    //     (err) => {
    //         if (err) return util.sendJSONresponse(res, 500, errors);
    //         else {
    //             //formVariable.form1 = true;
    //             util.sendJSONresponse(res, 200, { success_msg: "Form salved!" });
    //         }
    //     }
    // ); //end of Form.updateOne

    // //-------------------------------------------------------------------
};//end of sampleSendingDetails
//-------------------------------------------


module.exports = { sampleSendingDetails, formidSave }