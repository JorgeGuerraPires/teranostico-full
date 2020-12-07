import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GalaxyService } from './galaxy.service';

//-----------------------------------------------
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
//-----------------------------------------------

//-----------------------------------------------
import { FormBuilder, FormGroup } from '@angular/forms';
//-----------------------------------------------

//------------------------------------------------
export interface Element {
  uniprotKB: String;
  genesymbol: String;
  connections: Number;
}

const ELEMENT_DATA: Element[] = [];
//------------------------------------------------

@Component({
  selector: 'ter-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements OnInit, OnChanges {

  //-------------------------------------------------
  @Input() patientid = "c88dd94ce0cb284f4fdb1d4e22874f51b27100df9d47e89a57adcdbe74395b72";
  //--------------------------------------------------

  //-----------------------------------------------------
  displayedColumns: string[] = ['uniprotKB', 'geneSymbol', 'connections'];
  dataSource = new MatTableDataSource<Element>();
  //-------------------------------------------------------

  //----------------------------------------------------------
  readonly searchForm: FormGroup;
  //---------------------------------------------------------

  //--------------------------------------------------------
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //----------------------------------------------------------

  constructor(
    private route: ActivatedRoute,
    private galaxyService: GalaxyService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    //--------------------------------
    //this will make sure a search is started just in case there is a patient id
    if (this.patientid)
      this.getGeneTargets();
    //-------------------------------
  }

  getGeneTargets() {
    this.dataSource = new MatTableDataSource<Element>();//this will make sure the table is reset everytime a new search is done
    this.galaxyService.getTargets(this.patientid).subscribe((res) => {
      this.dataSource = res.geneArray;
      this.dataSource = new MatTableDataSource<Element>(res.geneArray);
      this.dataSource.paginator = this.paginator;
    });
  }
}