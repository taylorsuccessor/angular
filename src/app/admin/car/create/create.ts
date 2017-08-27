import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.html',

  providers: [Service],
})
export class Create  {
constructor(
    private _service: Service,
     private router: Router,
    ) { }

    model= new Model ();
 models: any;
  ngOnInit() {

      this.models = {
        radio: this.radios[0].value, // default to Female
   }

  }


  create() {
      this._service
        .create(this.model)
        .subscribe(() =>  this.goBack());
  }
   goBack() {
    this.router.navigate(['/car']);
  }
  public radios = [
{ value: 'F', display: 'Female' } ,
{ value:'M', display: 'Male' }
 ];
}
