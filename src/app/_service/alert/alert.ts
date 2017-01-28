
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.html',

})
export class Alert implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
   

  ) { }

  ngOnInit() {

  }

aler(msg:string);
  



}

