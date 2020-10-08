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
  //-----------------------------------------------

  finalReport: FinalReport;

  constructor(private route: ActivatedRoute, private finalReportService: FinalReportService) {
    this.finalReportService
      .getFinalReportbyId(route.snapshot.paramMap.get("id"))
      .subscribe((res) => {
        this.finalReport = res;

        //------------------------------------------------------
        this.patient = [
          { tag: "Name", value: this.finalReport.patient.Name },
          { tag: "Disease", value: this.finalReport.patient.disease },
          { tag: "Medical record", value: this.finalReport.patient.Medical_record },
          { tag: "sex", value: this.finalReport.patient.sex }

        ]


        //------------------------------------------------------


      });
    // console.log(route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
  }

}
