import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/service';
import { User } from '../service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
   providers: [UserService],
})
export class Register implements OnInit {
newTrustFormVisible= false;
  alert=false;
user:any;
    constructor(
    private userService: UserService,
     private router: Router) { }

  ngOnInit() {
  }

model = new User();

  
   addUser() {
        this.newTrustFormVisible = true;
        this.userService.addUser(this.model.user, this.model.email, this.model.password, this.model.repassword)

            .subscribe(
                data => {
                          if (data.status == 'success') {
                     this.newTrustFormVisible = false;
                    this.router.navigate(['/admin/car']);
                }
                else  if (data.status == 'error') {
                             this.router.navigate(['/register']); 
                         this.alert = true;
                          }
                },
                error => {
                 //   this.alertService.error(error);
                 // alert("not found");
                    this.newTrustFormVisible = false;
               }
              );
    }
  
  
  
  goBack(){
    this.router.navigate(['/login']);
  }
  
  
ref(){
    this.router.navigate(['/register']);
   this.newTrustFormVisible = false;
  this.alert=false;
  }

}
