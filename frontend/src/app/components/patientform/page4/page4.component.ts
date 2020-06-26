import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'ter-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  //------------------------------------------------
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 2],
    ['sm', 2],
    ['md', 4],
    ['lg', 4],
    ['xl', 4],
  ]);
  //----------------------------------------------

  //--------------------------------------------
  fields: FormGroup;
  //------------------------------------------

  //-----------------------------
  savedToDatabase = false;
  //---------------------------------



  //---------------------------------------------
  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private utilService: UtilService,
    private localStorageService: LocalStorageService
  ) {

    this.fields = fb.group(
      {
        QUIMIOTERAPIA_NEOADJUVANTE: fb.group({
          startingDate: ["", Validators.required],
          completionDate: ["", Validators.required],
          execution_place: ["", Validators.required],
          protocolo: ["", Validators.required]
        }),

        HORMONIOTERAPIA_NEOADJUVANTE: fb.group({
          startingDate: ["", Validators.required],
          completionDate: ["", Validators.required],
          execution_place: ["", Validators.required],
          protocolo: ["", Validators.required]
        }),
        CIRURGIA_INICIAL: fb.group({
          tipo: ["", Validators.required],
          axila: ["", Validators.required],
          data: ["", Validators.required]
        }),
        RADIOTERAPIA_ADJUVANTE: fb.group(
          {
            treatment1: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment2: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment3: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            })
          }),
        QUIMIOTERAPIA_ADJUVANTE: fb.group(
          {
            treatment1: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment2: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment3: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            })
          }),
        HORMONIOTERAPIA_ADJUVANTE: fb.group(
          {
            treatment1: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment2: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            }),
            treatment3: fb.group({
              startingDate: [""],
              completionDate: [""],
              execution_place: [""],
              protocolo: [""]
            })
          })
      }, { updateOn: "blur" });

    this.columns$ = this.utilService.getScreenSize()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc))
      );

  }
  //-------------------------------------------



  ngOnInit() {
  }

  //---------------------------------------------------

  save() {
    this.formsService.submitFormPage4(this.utilService.withoutEmptyValues(this.fields.value))
      .subscribe((res) => {
        this.savedToDatabase = true;
        this.utilService.openSnackBar(res.success_msg, "x")
      })
    // console.log(this.utilService.withoutEmptyValues(this.fields.value));
  }

  next() {
    //------------------------------------------------------------------------------------------------
    //This will save a local version of the form page
    this.localStorageService.saveJSON(this.utilService.withoutEmptyValues(this.fields.value), "page4")
    //-------------------------------------------------------------------------------------------
  }
  //---------------------------------------------------




}
