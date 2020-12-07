/**This is the schema for the Final Report, 
 */

//------------------------------------------------------------
//Imports
const mongoose = require("mongoose"); //bring in mongoose
//----------------------------------------------------------


//------------------------------------------
//Analysis type card schemas
const analysis_type_RNA_seqSchema = new mongoose.Schema({
    RNA_seq: String,
    Read_number_RNA_seq: Number
});

const analysis_type_Ampliseq_seqSchema = new mongoose.Schema({
    Ampliseq: String,
    Number_of_genes: Number
});

//--------------------------------------------



//------------------------------------------
//Patient card schema
const PatientSchema = new mongoose.Schema({
    patientid: String,
    disease: String,
    Name: String, /** Note 01 09 2020: I may need to encrypt this information */
    sex: String,
    Medical_record: String
});
//--------------------------------------------

//------------------------------------------
//Physician card schema
const physicianSchema = new mongoose.Schema({
    Ordering_physician: String,
    Medical_facility: String,
    Additional_recipients: String,
    Pathologist: String,
});
//--------------------------------------------

//------------------------------------------
//Physician card schema
const specimenSchema = new mongoose.Schema(
    {
        Specimen_site: String,
        Specimen_id: String,
        Specimen_type: String,
        Date_of_collection: Date,
        Date_of_reception: Date
    });
//--------------------------------------------

//------------------------------------------
//Final report schema
const FinalReportSchema = new mongoose.Schema({
    submittedBy: String,
    patient: PatientSchema,
    physician: physicianSchema,
    specimen: specimenSchema,
    analysis_type_RNA_seq: analysis_type_RNA_seqSchema,
    analysis_type_Ampliseq: analysis_type_Ampliseq_seqSchema

});
//--------------------------------------------

//---------------------------------------------
mongoose.model("FinalReport", FinalReportSchema);
//---------------------------------------------