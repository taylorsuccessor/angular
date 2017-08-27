import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

  constructor(private _http: Http) { }
  getAllList(){
    return this._http.get("http://localhost/api_json/select.php/")
      .map(res=> {


           return res.json();


      });
  }

  
 create( request:any ) {
    return this._http.post("http://localhost/api_json/add.php",request)
      .map(() => "");
  }

    delete(id) {
    return this._http.post("http://localhost/api_json/delete.php/", {'id': id})
      .map(() => this.getAllList());
  }
}
