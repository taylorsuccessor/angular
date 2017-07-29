import {Component, OnInit, Input} from '@angular/core';
import {Service} from '../service/service';
import {Model} from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.html',

  providers: [Service, Model],
})
export class Create {
  constructor(
    private _service: Service,
    private router: Router,
    private model: Model,

  ) {}

createStatus:any;

  ngOnInit() {

  }

  create() {
    this._service
      .create(this.model)
      .subscribe((response) => this.checkCreateResponse(response));
  }
  checkCreateResponse(response: any) {
    if (typeof response.status !== 'undefined' && response.status == "success") {
      alert("success");
      this.createStatus=true;
     //this.router.navigate(['/car']);
    } else {
    alert("error");
   this.createStatus=false;
       
          //this.router.navigate(['/car']);

    }
  }
  
  public radios = [
    {value: 'F', display: 'Female'},
    {value: 'M', display: 'Male'}
  ];



}
