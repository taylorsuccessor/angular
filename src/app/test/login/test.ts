
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../commones/service/service';
import { User } from '../../commones/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  providers: [UserService],
})
export class Test implements OnInit {
newTrustFormVisible: false;
 loading = false;
  alert= false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,

  ) { }

  ngOnInit() {

  }

  model = new User();

  login() {
        this.loading = true;
        this.userService.login(this.model.email, this.model.password)

            .subscribe(
                data => {
                          if (data.status == 'success') {
                     this.loading = false;
                    this.router.navigate(['/car']);
                }
                else  if (data.status == 'error') {
                             this.router.navigate(['/login']); 
                             this.alert = true;
                          }
                },
                error => {
                    this.loading = false;
               }
              );
    }
  
  
  
   goBack() {
    this.router.navigate(['/register']);
  }

forgetPas() {
 this.router.navigate(['/admin-recover']);
}

ref(){
    this.router.navigate(['/login']);
   this.loading = false;
  this.alert=false;
  }

}

