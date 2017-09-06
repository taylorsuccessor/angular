import {Component, Input} from '@angular/core';
import {Service} from '../service/service';
import {Model} from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Listener} from '../../../common/serverSendEvent/listener';
import {ChatService} from '../../../common/socket/chatService';


@Component({
  selector: 'table-container',
  templateUrl: './index.html',


  providers: [Service, Listener,ChatService],
})

export class Index  {


      filteredItems : 7;
   pages : number = 4;
  pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;


   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';


  constructor(
    private _service: Service,
    private router: Router,

    private listener: Listener, private chatService:ChatService) {
       this.filteredItems = 7;
       this.init();
    }

  models:any;


  data: any;
  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
//wss://arabtrader.com:9004/HOB
    //ws://echo.websocket.org/

   // this.listener.observe('http://localhost:3000?name=1').subscribe(data => console.log(data) );
this.chatService.createObservable().subscribe((data:any) => console.log(data.data,'sunnnnbscribe') );
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

  sendData(){
  this.chatService.ws.send('do some thing here');
  
  }

 init(){
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (7 / this.pageSize));
         if(7 % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
      
   }


   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
 refreshItems(){
 //              this.models = this.filteredItems((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }
   prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }
  name = 'Angular'; }

