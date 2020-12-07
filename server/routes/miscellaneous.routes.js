const express = require("express");
const router = express.Router(); //this is needed because this file is a router collection
const ctrlForm = require("../controllers/miscellaneous.controllers");


//-------------------------------------------------------------------
router.post("/samplesendingdetails", ctrlForm.sampleSendingDetails);
//------------------------------------------------------------------


module.exports = router;