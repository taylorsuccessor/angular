import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-show',
  templateUrl: './show.html',

  providers: [Service],
})
export class Show  {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }
  models:any;
  ngOnInit() {
    this.getSingleModel();
      this.getAllList();
  }
  model: Model;
  getSingleModel() {
    var id = this.route.snapshot.params['id'];
    this._service
      .show(id)
      .subscribe(model => {
          this.model = model[0];
          } )
  };

  goBack() {
    this.router.navigate(['/car']);
  }
    delete(id: number) {
      this._service
        .delete(id)
        .subscribe(() => {
       this.getAllList();
          this.goBack();
      } )
  }

    getAllList() {
     this._service
        .getAllList()
        .subscribe(models => {
          this.models = models;
      } )
  }


}
