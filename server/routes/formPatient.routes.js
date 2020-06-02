/**
 * This is dedicated to routes related to
 * the patient main form, the ones sent alongside the samples
 */
//-------------------------------------------------------------------------
const express = require("express");
const router = express.Router(); //this is needed because this file is a router collection
const ctrlForm = require("../controllers/formPatient.controllers");
//---------------------------------------------------------

//--------------------------------------------------------
// call: /api/patient/form/formid
router.post("/formid", ctrlForm.formidSave);
//--------------------------------------------------------


//------------------------------------------------------------------
// call: /api/patient/form/samplesendingdetails
router.post("/samplesendingdetails", ctrlForm.sampleSendingDetails);
//------------------------------------------------------------------

module.exports = router;