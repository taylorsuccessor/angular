import { NgModule ,Component, OnInit, Input } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.html',

  providers: [Service],
})
export class Create  {

  model=new Model();
  name:string;
  username="dddddddddd";
  
  constructor(
    private _service: Service,
    private router: Router){}

ngOnInit() {
  
  }
  
  
 
  create() {
      this._service
        .create(this.model)
        .subscribe(() =>  this.router.navigate(['/admin/car']));
  }
}
