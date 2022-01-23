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
    physician: {
        Ordering_physician: String;
        Medical_facility: String;
        Additional_recipients: String;
        Pathologist: String;
    }
    specimen: {
        Specimen_site: String;
        Specimen_id: String;
        Specimen_type: String;
        Date_of_collection: String;
        Date_of_reception: String;
    }

    analysis_type_RNA_seq:
    {
        RNA_seq: String;
        Read_number_RNA_seq: Number;
    },
    analysis_type_Ampliseq:
    {
        Ampliseq: String;
        Number_of_genes: Number
    },
    Genotyping:
    {
        Genotyping: String;
        Painel_type: String;
        Customized: String;
    }

    submittedBy: String;
}
