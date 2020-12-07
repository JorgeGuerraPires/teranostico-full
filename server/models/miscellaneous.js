/**
 */
//-----------------------------------------------------------------------
const mongoose = require("mongoose"); //bring in mongoose
const User = mongoose.model("User"); //create a model from our schema
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
const sampleSendingDetailsSchema = new mongoose.Schema({
    patientid: String,
    //header/identifier
    recipient: String,
    //packageDetails
    service: String,
    trackingNumber: String,

    //sender
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalcode: String,

    //contactinfo: {
    phoneNumber: String,
    email: String,
});
//---------------------------------------------------------------------


//--------------------------------------------------------
mongoose.model("SendingSamples", sampleSendingDetailsSchema); //create a model from our schema
//--------------------------------------------------------
