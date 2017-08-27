import { Component } from '@angular/core';

import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'table',
  templateUrl: './index.html',
  styleUrls: [''],

  providers: [Service],
})
export class Index  {
  constructor(
    private _service: Service,
    private router: Router){}

  models:any;
 private allItems: any[];

    // pager object
    pager: any = {};
  
  ngOnInit() {
    this.getAllList();
  }
  
  
  getAllList(){
     this._service
        .getAllList()
        .subscribe(models => {
          this.models = models.rows;
      } );
  }

  name = 'Angular'; }
