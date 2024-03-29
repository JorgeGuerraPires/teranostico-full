import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Form } from 'src/app/shared/interfaces/patientForm';
import { FormsService } from "../services/forms.service"
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'ter-retrieved',
  templateUrl: './retrieved.component.html',
  styleUrls: ['./retrieved.component.scss']
})
export class RetrievedComponent implements OnInit {

  //----------------------------------------------
  displayedColumns: string[] = ['tag', 'value'];
  dataSourceFormid;
  dataSourcePage1;
  dataSourcePage2;
  dataSourcePage3;
  dataSourcePage4_QUIMIOTERAPIA_NEOADJUVANTE;
  dataSourcePage4_HORMONIOTERAPIA_NEOADJUVANTE;
  dataSourcePage4_CIRURGIA_INICIAL;
  dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment1;
  dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment2;
  dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment3;
  //---------------------------------------------

  //---------
  dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment1
  dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment2
  dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment3
  //----------

  //---------
  dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment1
  dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment2
  dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment3
  //----------

  //--------------
  dataSourcePage5;
  //---------------


  formid: String;
  form: Form;

  constructor(private route: ActivatedRoute, private formsService: FormsService, private utilService: UtilService,) {
    // this.formid = route.snapshot.paramMap.get("id");
    this.formsService.formById(route.snapshot.paramMap.get("id"))
      .subscribe((res) => {
        if (!res) {
          this.utilService.openSnackBar("no form found with this id", "x");
          return;
        }

        this.form = res;

        this.dataSourceFormid = [
          { tag: "Doctor's email", value: this.form.formid.patient.doctor.email },
          { tag: "Doctor's name", value: this.form.formid.patient.doctor.name },
          { tag: "Level of privacy", value: this.form.formid.privacy.levelofprivacy }
        ];

        this.dataSourcePage1 = [
          { tag: "Collecting date:", value: this.form.form1.sampleDate },
          { tag: "Who collected?", value: this.form.form1.collectorName },
          { tag: "Institution:", value: this.form.form1.institution },
          { tag: "medical record:", value: this.form.form1.medicalrecord },
          { tag: "Name:", value: this.form.form1.name },
          { tag: "Mother's name:", value: this.form.form1.mothername },
          { tag: "Birthday:", value: this.form.form1.birthday }
        ];

        this.dataSourcePage2 = [
          { tag: "Menopausa:", value: this.form.form2.menopause },
          { tag: "Peso:", value: this.form.form2.weight },
          { tag: "Altura:", value: `${this.form.form2.height.meter} meter(s) and ${this.form.form2.height.centimeter} centimeter(s)` },
          { tag: "História familiar:", value: this.form.form2.familyhistory },
          { tag: "Doenças associadas:", value: this.form.form2.relateddiseases },
          { tag: "outros cânceres:", value: this.form.form2.previouscancers },

        ];

        this.dataSourcePage3 = [
          { tag: "Identificação do laudo (local de realização e nº):", value: this.form.form3.reportid },
          { tag: "Data do exame:", value: this.form.form3.examdate },
          { tag: "Tipo do tumor:", value: this.form.form3.selectedTumorType },
          { tag: "Tamanho do tumor:", value: this.form.form3.tumorsize },
          { tag: "Linfonodos: ", value: this.form.form3.linfonodos },
          { tag: "Infiltração:", value: this.form.form3.infiltration },
          { tag: "IMHQ:", value: `${this.form.form3.IMHQ.option} ${this.form.form3.IMHQ.detail ? this.form.form3.IMHQ.detail : ""}` },
          { tag: "Classificação (luminal A e B, basal...):", value: this.form.form3.classification },
          { tag: "Clinico TNM (ESTADIAMENTO):", value: this.form.form3.ESTADIAMENTO.TNM },
          { tag: "Patológico pTpNM (ESTADIAMENTO):", value: this.form.form3.ESTADIAMENTO.pTpNM }
        ];

        this.dataSourcePage4_QUIMIOTERAPIA_NEOADJUVANTE = [
          { tag: "Data início:", value: this.form.form4.QUIMIOTERAPIA_NEOADJUVANTE.startingDate },
          { tag: "término:", value: this.form.form4.QUIMIOTERAPIA_NEOADJUVANTE.completionDate },
          { tag: "Protocolo:", value: this.form.form4.QUIMIOTERAPIA_NEOADJUVANTE.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.QUIMIOTERAPIA_NEOADJUVANTE.execution_place },
        ];


        this.dataSourcePage4_HORMONIOTERAPIA_NEOADJUVANTE = [
          { tag: "Data início:", value: this.form.form4.HORMONIOTERAPIA_NEOADJUVANTE.startingDate },
          { tag: "término:", value: this.form.form4.HORMONIOTERAPIA_NEOADJUVANTE.completionDate },
          { tag: "Protocolo:", value: this.form.form4.HORMONIOTERAPIA_NEOADJUVANTE.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.HORMONIOTERAPIA_NEOADJUVANTE.execution_place },
        ];


        this.dataSourcePage4_CIRURGIA_INICIAL = [
          { tag: "Tipo:", value: this.form.form4.CIRURGIA_INICIAL.tipo },
          { tag: "Axila:", value: this.form.form4.CIRURGIA_INICIAL.axila },
          { tag: "Data:", value: this.form.form4.CIRURGIA_INICIAL.data },
        ];

        this.dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment1 = [
          { tag: "Data início:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment1.startingDate },
          { tag: "término:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment1.completionDate },
          { tag: "Protocolo:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment1.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment1.execution_place }
        ];

        this.dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment2 = [
          { tag: "Data início:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment2.startingDate },
          { tag: "término:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment2.completionDate },
          { tag: "Protocolo:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment2.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment2.execution_place }
        ];

        this.dataSourcePage4_RADIOTERAPIA_ADJUVANTE_treatment3 = [
          { tag: "Data início:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment3.startingDate },
          { tag: "término:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment3.completionDate },
          { tag: "Protocolo:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment3.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.RADIOTERAPIA_ADJUVANTE.treatment3.execution_place }
        ];


        //-------------------------------------------------------------------
        this.dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment1 = [
          { tag: "Data início:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment1.startingDate },
          { tag: "término:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment1.completionDate },
          { tag: "Protocolo:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment1.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment1.execution_place }
        ];

        this.dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment2 = [
          { tag: "Data início:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment2.startingDate },
          { tag: "término:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment2.completionDate },
          { tag: "Protocolo:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment2.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment2.execution_place }
        ];

        this.dataSourcePage4_QUIMIOTERAPIA_ADJUVANTE_treatment3 = [
          { tag: "Data início:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment3.startingDate },
          { tag: "término:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment3.completionDate },
          { tag: "Protocolo:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment3.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.QUIMIOTERAPIA_ADJUVANTE.treatment3.execution_place }
        ];
        //----------------------------------------------------------------


        //-------------------------------------------------------------------
        this.dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment1 = [
          { tag: "Data início:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment1.startingDate },
          { tag: "término:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment1.completionDate },
          { tag: "Protocolo:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment1.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment1.execution_place }
        ];

        this.dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment2 = [
          { tag: "Data início:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment2.startingDate },
          { tag: "término:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment2.completionDate },
          { tag: "Protocolo:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment2.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment2.execution_place }
        ];

        this.dataSourcePage4_HORMONIOTERAPIA_ADJUVANTE_treatment3 = [
          { tag: "Data início:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment3.startingDate },
          { tag: "término:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment3.completionDate },
          { tag: "Protocolo:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment3.protocolo },
          { tag: "Local  de execução:", value: this.form.form4.HORMONIOTERAPIA_ADJUVANTE.treatment3.execution_place }
        ];
        //----------------------------------------------------------------

        this.dataSourcePage5 = [
          { tag: "obs.:", value: this.form.form5.outcoming },

        ];
        //----------------------------------------------------------------

      });
  }

  ngOnInit() {

  }


  //----------------------------------------------------------
  //methods
  delete() {
    if (confirm("Are you sure you want to delete this form? it cannot be restored."))
      console.log("here on delete form");
  }

  //----------------------------------------------------------

}
