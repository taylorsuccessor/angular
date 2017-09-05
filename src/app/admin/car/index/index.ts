import {Component, Input} from '@angular/core';
import {Service} from '../service/service';
import {Model} from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Listener} from '../../../common/serverSendEvent/listener';
import {ChatService} from '../../../common/socket/chatService';


@Component({
  selector: 'table-container',
  templateUrl: './index.html',
  styleUrls: [''],

  providers: [Service, Listener,ChatService],
})
export class Index {
  constructor(
    private _service: Service,
    private router: Router,
    private listener: Listener, private chatService:ChatService) {}

  models: any;

  data: any;
  ngOnInit() {
    this.getAllList();
  }

  getAllList() {

   // this.listener.observe('http://localhost:3000?name=1').subscribe(data => console.log(data) );
this.chatService.connect('ws://echo.websocket.org/');
    
    
    this._service
      .getAllList()
      .subscribe(models => {
        this.models = models.rows;
      });
  }

  delete(id: number) {
    this._service
      .delete(id)
      .subscribe(() => {
        this.getAllList();
      });
  }

  name = 'Angular';
}