import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import * as _ from 'underscore';
import { PagerService } from './pager.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  providers: [PagerService]
})
export class Pagination implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
      private pagerService: PagerService,
  ) { }

  ngOnInit() {


  }
  models:any;
 private allItems: any[];
    pager: any = {};
     setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.models = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}

