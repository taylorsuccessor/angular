import { Component } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'table-container',
  templateUrl: './index.html',
  styleUrls: [''],

  providers: [Service],
})
export class Index  {
  constructor(
    private _service: Service,
    private router: Router) {}

  models:any;


  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
     this._service
        .getAllList()
        .subscribe(models => {
          this.models = models.rows;
      } );
  }

    delete(id:number) {
      this._service
        .delete(id)
        .subscribe(() => {
        this.getAllList();
      } )
  }

  name = 'Angular'; }