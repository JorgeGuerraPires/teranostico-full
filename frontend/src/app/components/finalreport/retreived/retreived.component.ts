import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FinalReportService } from "../services/FinalReport.service";
import { FinalReport } from "../interfaces/FinalReport"


@Component({
  selector: 'ter-retreived',
  templateUrl: './retreived.component.html',
  styleUrls: ['./retreived.component.scss']
})
export class RetreivedComponent implements OnInit {

  //----------------------------------------------
  displayedColumns: string[] = ['tag', 'value'];
  patient;
  physician;
  specimen;
  analysis_type;
  //-----------------------------------------------

  finalReport: FinalReport;

  constructor(private route: ActivatedRoute, private finalReportService: FinalReportService) {
    this.finalReportService
      .getFinalReportbyId(route.snapshot.paramMap.get("id"))
      .subscribe((res) => {

        console.log(res);

        this.finalReport = res;

        //------------------------------------------------------
        this.patient = [
          { tag: "Name", value: this.finalReport.patient.Name },
          { tag: "Disease", value: this.finalReport.patient.disease },
          // { tag: "Medical record", value: this.finalReport.patient.Medical_record },
          { tag: "sex", value: this.finalReport.patient.sex }
        ]
        //------------------------------------------------------

        //------------------------------------------------------
        this.physician = [
          { tag: "Ordering physician:", value: this.finalReport.physician.Ordering_physician },
          { tag: "Medical facility", value: this.finalReport.physician.Medical_facility },
          { tag: "Additional recipient", value: this.finalReport.physician.Additional_recipients },
          { tag: "Pathologist", value: this.finalReport.physician.Pathologist }
        ]
        //------------------------------------------------------

        //------------------------------------------------------
        this.specimen = [
          { tag: "Specimen site", value: this.finalReport.specimen.Specimen_site },
          { tag: "Specimen id", value: this.finalReport.specimen.Specimen_id },
          { tag: "Specimen type", value: this.finalReport.specimen.Specimen_type },
          { tag: "Date of collection", value: this.finalReport.specimen.Date_of_collection },
          { tag: "Date of reception", value: this.finalReport.specimen.Date_of_reception }
        ]
        //------------------------------------------------------

        //------------------------------------------------------
        this.analysis_type = [
          //----------
          { tag: "RNA-seq:", value: this.finalReport.analysis_type_RNA_seq.RNA_seq },
          { tag: "Read number:", value: this.finalReport.analysis_type_RNA_seq.Read_number_RNA_seq },
          //----------
          { tag: "Ampliseq:", value: this.finalReport.analysis_type_Ampliseq.Ampliseq },
          { tag: "Number of genes:", value: this.finalReport.analysis_type_Ampliseq.Number_of_genes },
          //-------------
          { tag: "Genotyping:", value: this.finalReport.Genotyping.Genotyping },
          { tag: "Painel type:", value: this.finalReport.Genotyping.Painel_type },
          { tag: "Customized:", value: this.finalReport.Genotyping.Customized },
          //-------------
        ]
        //------------------------------------------------------











      });
    // console.log(route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
  }

}
