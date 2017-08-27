import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'my-app',
  templateUrl: './layout.html',

})
export class Layout implements OnInit {
term$ = new Subject<string>();
  constructor(

  ) { }

  ngOnInit() {
  }


}
