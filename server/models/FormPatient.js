/**
 * This is the primary form of the patient, the one the doctor will submit alongside the samples
 *
 */

//-------------------------------------------------------------
const mongoose = require("mongoose"); //bring in mongoose
const CryptoJS = require("crypto-js");//this used on the personal information from the patient
//------------------------------------------------------------


//------------------------------------------
//This is for the different options of panel that can be ordered
const geneticRequestPanelSchema = new mongoose.Schema({
    type: String,
    option: String,
});
//--------------------------------------------


//------------------------------------------
//This is for the privacy configuration
const privacySchema = new mongoose.Schema({
    levelofprivacy: String,
    serverConsent: Boolean,
});
//--------------------------------------------

//---------------------------------------------------
//This is the sampling sending details, a sort of header
const sampleSendingDetailsSchema = new mongoose.Schema({
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

    //contactinfo:
    phoneNumber: String,
    email: String,
});
//---------------------------------------------

//---------------------------------------------
const Form1Schema = new mongoose.Schema({
    sampleDate: {
        type: String,
    },
    collector: {
        type: String,
    },
    institution: {
        type: String,
    },
    medicalrecord: {
        type: String,
    },
    //-------------------------------------
    //encrypted information
    name: {
        type: String,
        set: encryption,
        get: decryption,
    },
    mothername: {
        type: String,
        set: encryption,
        get: decryption,
    },
    //------------------------------------
    birthday: {
        type: String,
    },
});//end of  Form1Schema
//----------------------------------------------


//---------------------------------------------
/**Note (30/05/2020): I am not sure why I had to set this, but I believe it has to do with 
 * the virtual I am using to avoid using populate
 */
Form1Schema.set("toObject", { getters: true });
Form1Schema.set("toJSON", { getters: true });
//---------------------------------------------


//------------------------------------------------
//2rd part of the form
const Form2Schema = new mongoose.Schema({
    menopause: {
        type: String,
        //required: true
    },
    weight: {
        type: String,
        //required: true
    },
    height: {
        type: String,
        //required: true
    },
    familyhistory: {
        type: String,
        //required: true
    },
    relateddiseases: {
        type: String,
        //required: true
    },
    previouscancers: {
        type: String,
        //required: true
    },
});
//---------------------------------------------

//-------------------------------------------
//3rd form
const Form3Schema = new mongoose.Schema({
    reportid: {
        type: String,
        //required: true
    },
    examdate: {
        type: String,
        //required: true
    },
    typeofcancer: {
        type: String,
        //required: true
    },
    Linfonodos: {
        type: String,
        //required: true
    },
    IMHQ: {
        type: String,
        //required: true
    },
    classification: {
        type: String,
        //required: true
    },
    TNM: {
        type: String,
        //required: true
    },
    pTpNM: {
        type: String,
        //required: true
    },
    Infiltration: {
        type: String,
        //required: true
    },
    IMHQSelected: {
        type: String,
        //required: true
    },
    tumorsize: {
        type: Number,
    },
});
//-----------------------------------------

//-------------------------------------------
//4th form 
const Form4Schema = new mongoose.Schema({
    //QUIMIOTERAPIA  NEOADJUVANTE
    QUIMIOTERAPIA_NEOADJUVANTE: {
        startingDate: Date, //I am using string instead of Date type, I may need to use Date type in the future
        completionDate: Date,
        protocolo: String,
        execution_place: String,
    },
    //HORMONIOTERAPIA NEOADJUVANTE
    HORMONIOTERAPIA_NEOADJUVANTE: {
        startingDate: Date, //I am using string instead of Date type, I may need to use Date type in the future
        completionDate: Date,
        protocolo: String,
        execution_place: String,
    },
    //CIRURGIA INICIAL
    CIRURGIA_INICIAL: {
        tipo: String,
        axila: String,
        data: String,
    },
    //RADIOTERAPIA ADJUVANTE
    RADIOTERAPIA_ADJUVANTE: {
        //treatment 1
        startingDate_treatment1: Date,
        completionDate_treatment1: Date,
        protocolo_treatment1: String,
        execution_place_treatment1: String,
        //treatment 2
        startingDate_treatment2: Date,
        completionDate_treatment2: Date,
        protocolo_treatment2: String,
        execution_place_treatment2: String,
        //treatment 3
        startingDate_treatment3: Date,
        completionDate_treatment3: Date,
        protocolo_treatment3: String,
        execution_place_treatment3: String,
    },
    //QUIMIOTERAPIA ADJUVANTE
    QUIMIOTERAPIA_ADJUVANTE: {
        //treatment 1
        startingDate_treatment1: Date,
        completionDate_treatment1: Date,
        protocolo_treatment1: String,
        execution_place_treatment1: String,
        //treatment 2
        startingDate_treatment2: Date,
        completionDate_treatment2: Date,
        protocolo_treatment2: String,
        execution_place_treatment2: String,
        //treatment 3
        startingDate_treatment3: Date,
        completionDate_treatment3: Date,
        protocolo_treatment3: String,
        execution_place_treatment3: String,
    },
    //HORMONIOTERAPIA ADJUVANTE
    HORMONIOTERAPIA_ADJUVANTE: {
        //treatment 1
        startingDate_treatment1: Date,
        completionDate_treatment1: Date,
        protocolo_treatment1: String,
        execution_place_treatment1: String,
        //treatment 2
        startingDate_treatment2: Date,
        completionDate_treatment2: Date,
        protocolo_treatment2: String,
        execution_place_treatment2: String,
        //treatment 3
        startingDate_treatment3: Date,
        completionDate_treatment3: Date,
        protocolo_treatment3: String,
        execution_place_treatment3: String,
    },
});
//---------------------------------------------

//-------------------------------------------------
//Organizing all the form pages into a single form in Mongo
/**Here we gather all the subdocuments into a single document */
const FormSchema = new mongoose.Schema({
    formid: FormidSchema,
    form1: Form1Schema,
    form2: Form2Schema,
    form3: Form3Schema,
    form4: Form4Schema,
    sampleSendingDetails: sampleSendingDetailsSchema,
    geneticRequestPanel: geneticRequestPanelSchema,
});
//------------------------------------------------ 

//--------------------------------------------------
//Methods section
/**Herein one can find the methods that support on the path manipulations */
/**@description encrypt a information */
function encryption(value) {
    return CryptoJS.AES.encrypt(
        value,
        process.env.encryption_sensitive_patient_information
    );
}
/**@description decrypt a information */
function decryption(value) {
    return CryptoJS.AES.decrypt(
        value,
        process.env.encryption_sensitive_patient_information
    ).toString(CryptoJS.enc.Utf8);
}
//--------------------------------------------------



//-----------------------------------------------
//Everything is arranged into Form and exported
const Form = mongoose.model("Form", FormSchema);
module.exports = Form;
//-----------------------------------------------

