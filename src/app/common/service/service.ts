import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  useres: any;
  constructor(private _http: Http) { }
  checkMe :any;


 addUser(user: string, email: string, password: string, repassword: string) {
    return this._http.post( "http://localhost/api_json/add_user.php",  JSON.stringify({user:user,  email: email, password: password, repassword: repassword}))
          .map((res: Response) => {
                let user = res.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }else {
     //      alert(user.status);
                }
              return user;
            });
  }

  loginUser(request: any ) {
   return this._http.get("http://localhost/api_json/login_user.php", request)
 .map(() => "");
  }

  SendEmail(request: any ) {
   return this._http.get("http://localhost:4200/api_json/login_user.php", request)
   .map(() => "");
  }

error(mess: string) {
  console.log(mess);
}

success(mes: string) {
    window.alert(mes);
}

     login(email: string, password: string) {
        return this._http.post('http://localhost/api_json/login_user.php', JSON.stringify({ email: email, password: password }))
            .map((res: Response) => {
                // login successful if there's a jwt token in the response
                let user = res.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }else {
          // alert(user.status);
                }
              return user;
            });
    }

}
