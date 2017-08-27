
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../commones/service/service';
import { User } from '../../commones/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.html',
    providers: [UserService],
})
export class Recover  {
newTrustFormVisible= false;
  constructor(

  ) { }

  ngOnInit() {

  }



}
