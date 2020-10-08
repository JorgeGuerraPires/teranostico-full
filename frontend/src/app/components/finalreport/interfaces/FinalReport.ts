/**
 * This interface is for the whole final report
 */

export interface FinalReport {
    _id: String;
    patient: {
        disease: String;
        Name: String;
        sex: String;
        Medical_record: String;
    }
    submittedBy: String;
}
