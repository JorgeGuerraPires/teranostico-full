export class Formid {
    emaildr: string;
    patientid: string;
    levelofprivacy: string;
    serverConsent: Boolean;
    patientidSecret: string;
    patient?: string;
}

export class FormPage1 {

    sampleDate: Date;
    collectorName: string;
    institution: string;
    medicalrecord: string;
    name: string;
    mothername: string;
    birthday: Date;

}

export class FormPage2 {
    menopause: boolean;
    weight: Number;
    height: { meter: number, centimeter: number };
    familyhistory: String;
    relateddiseases: String;
    previouscancers: String
}

export class FormPage3 {

    reportid: String;
    examdate: String;
    selectedTumorType: String;
    othertumors: String;
    tumorsize: String;
    linfonodos: String;
    infiltration: String;
    IMHQ:
        {
            option: String;
            detail: String;
        };

    classification: String;
    ESTADIAMENTO:
        {
            TNM: String;
            pTpNM: String;
        }

}

export class FormPage4 {

    QUIMIOTERAPIA_NEOADJUVANTE: {
        startingDate: String;
        completionDate: String;
        execution_place: String;
        protocolo: String;
    };

    HORMONIOTERAPIA_NEOADJUVANTE: {
        startingDate: String;
        completionDate: String;
        execution_place: String;
        protocolo: String;
    };
    CIRURGIA_INICIAL: {
        tipo: String;
        axila: String;
        data: String;
    };
    RADIOTERAPIA_ADJUVANTE:
        {
            treatment1: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment2: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment3: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
        };
    QUIMIOTERAPIA_ADJUVANTE:
        {
            treatment1: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment2: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment3: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
        };
    HORMONIOTERAPIA_ADJUVANTE:
        {
            treatment1: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment2: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            };
            treatment3: {
                startingDate: String;
                completionDate: String;
                execution_place: String;
                protocolo: String;
            }
        }
}


export class FormPage5 {
    outcome: String
}

export class Form {
    formid:
        {
            patient:
            {
                doctor:
                {
                    email: String;
                    name: String;
                }
            }

            privacy:
            {
                levelofprivacy: String
            }

        };
    form1:
        {
            sampleDate: Date
            collectorName: String;
            institution: String;
            medicalrecord: String;
            name: String;
            mothername: String;
            birthday: Date;
        };

    form2:
        {
            familyhistory: String;
            relateddiseases: String;
            previouscancers: String;
            menopause: Boolean;
            height: { meter: Number, centimeter: Number };
            weight: Number;
        };

    form3: {
        reportid: String;
        examdate: String;
        selectedTumorType: String;
        tumorsize: Number;
        linfonodos: String;
        infiltration: String;
        IMHQ:
        {
            option: String;
            detail: String
        };
        classification: String;
        ESTADIAMENTO:
        {
            TNM: String;
            pTpNM: String
        };
    }

    form4: {
        QUIMIOTERAPIA_NEOADJUVANTE: {
            startingDate: Date;
            completionDate: Date;
            protocolo: String;
            execution_place: String;
        };
        HORMONIOTERAPIA_NEOADJUVANTE:
        {
            startingDate: Date;
            completionDate: Date;
            protocolo: String;
            execution_place: String;

        };
        CIRURGIA_INICIAL:
        {
            tipo: String;
            axila: String;
            data: String;
        };
        RADIOTERAPIA_ADJUVANTE: {
            treatment1: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment2: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment3: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            }

        };
        QUIMIOTERAPIA_ADJUVANTE: {
            treatment1: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment2: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment3: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            }

        };
        HORMONIOTERAPIA_ADJUVANTE: {
            treatment1: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment2: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            };
            treatment3: {
                startingDate: Date;
                completionDate: Date;
                protocolo: String;
                execution_place: String;

            }

        }
    }
    form5: {
        outcoming: String;

    }
}