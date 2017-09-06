import {Injectable} from '@angular/core';

import * as Rx from 'rxjs/Rx';


Injectable( )
export class ChatService {
  private socket: Rx.Subject<MessageEvent>;

  ws: WebSocket;

  public constructor() {
  this.ws = new WebSocket('ws://localhost:5000/');
  }

  public connect(url: any): Rx.Subject<MessageEvent> {
    if (!this.socket) {
      this.socket = this.create(url);
    }
    return this.socket;
  }


  private create(url: any): Rx.Subject<MessageEvent> {

      this.ws.onopen =  () => {
            console.log('Opening a connection...');
            this.ws.send('this is sent data');
        };
  

    let observable = Rx.Observable.create(
        (obs: Rx.Observer<MessageEvent>) => {
            this.ws.onmessage = obs.next.bind(obs); 
            this.ws.onerror = obs.error.bind(obs);
            this.ws.onclose = obs.complete.bind(obs);
            return this.ws.close.bind(this.ws);
        }
    );

    let observer = {
        next: (data: Object) => {
            if (this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify(data));
            }
        },
    };
    return Rx.Subject.create(observer, observable);
    
    
}
  
  public createObservable(){
  
      this.ws.onopen =  () => {
            console.log('Opening a connection...');
            this.ws.send('this is sent data');
        };
  
  return Rx.Observable.create((obs:any)=>{ this.ws.onmessage = obs.next.bind(obs);});
  }

}


