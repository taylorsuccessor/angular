import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class Service {

  constructor(private _http: Http) { }
  getAllList() {
    return this._http.get("http://localhost/api_json/select.php/")
      .map(response => {  return response.json();});
  }

 create( request: any ) {
    return this._http.post("http://localhost/api_json/add.php",request)
      .map(response => {  return response.json();});
  }

    delete(id: number) {
    return this._http.post("http://localhost/api_json/delete.php/", {'id': id})
      .map(() => this.getAllList());
  }

    edit(request: any ) {
    return this._http.post("http://localhost/api_json/update.php/", request)
      .map(response => {  return response.json();});
  }

    show(id: number) {
    return this._http.post("http://localhost/api_json/selectone.php/", {'id': id})
      .map(res => res.json());
  }

}
