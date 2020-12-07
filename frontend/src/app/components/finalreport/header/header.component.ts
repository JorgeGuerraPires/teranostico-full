import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faHospitalUser, faMedkit, faMicroscope, faDna, faArrowRight, faSave } from '@fortawesome/free-solid-svg-icons';
import { FinalReportService } from "../services/FinalReport.service"
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'ter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //----------------------------------------------
  //Customized layout related
  widthCards = "95%";
  //--------------------------------------------

  //---------------------------------------------
  //Font awesome
  faHospitalUser = faHospitalUser;
  faMedkit = faMedkit;
  faMicroscope = faMicroscope;
  faDna = faDna;
  faArrowRight = faArrowRight;
  faSave = faSave;
  //--------------------------------------------

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  constructor(
    private fb: FormBuilder,
    private finalReportService: FinalReportService,
    private utilService: UtilService,
  ) {

    this.fields = fb.group({
      patient: fb.group({
        patientid: ["", Validators.required],
        disease: ["", Validators.required],
        Name: ["", Validators.required],
        sex: ["", Validators.required],
        Medical_record: ["", Validators.required]
      }),
      physician: fb.group({
        Ordering_physician: ["", Validators.required],
        Medical_facility: ["", Validators.required],
        Additional_recipients: ["", Validators.required],
        Pathologist: ["", Validators.required]
      }),
      specimen: fb.group({
        Specimen_site: ["", Validators.required],
        Specimen_id: ["", Validators.required],
        Specimen_type: ["", Validators.required],
        Date_of_collection: ["", Validators.required],
        Date_of_reception: ["", Validators.required]
      }),

      analysis_type_RNA_seq: fb.group({
        RNA_seq: ["", Validators.required],
        Read_number_RNA_seq: ["", Validators.required]
      }),

      analysis_type_Ampliseq: fb.group({
        Ampliseq: ["", Validators.required],
        Number_of_genes: ["", Validators.required]
      }),

      Genotyping: fb.group({
        Genotyping: ["", Validators.required],
        Painel_type: ["", Validators.required],
        Customized: ["", Validators.required]
      }),
    }, { updateOn: "blur" });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.fields.value);
    this.finalReportService.submitHeader(this.fields.value)
      .subscribe((res) => {
        // console.log(res)
        this.utilService.openSnackBar(res.success_msg, "x");
      });
  }
}