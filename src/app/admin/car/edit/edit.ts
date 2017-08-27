import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.html',

  providers: [Service],
})
export class Edit  {
constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }
  models:any;
  ngOnInit() {
      this.getSingleModel();
      this.models = {
        radio: this.radios[0].value, // default to Female
   }

  }

  model = new Model();
  id = this.route.snapshot.params['id'];
  getSingleModel() {

    this._service
      .show(this.id)
      .subscribe(model => {
          this.model = model[0];
          })
  };

  edit() {
      this._service
        .edit(this.model)
        .subscribe(()=> this.goBack());
  }

   goBack() {
    this.router.navigate(['/car']);
  }
  public radios = [
{ value: 'F', display: 'Female' },
{ value: 'M', display: 'Male' }
];


}
