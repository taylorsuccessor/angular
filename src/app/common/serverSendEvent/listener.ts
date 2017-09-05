/*
 *  How to use
 * 
 * import {Listener} from '../../../common/serverSendEvent/listener';
 * 
 * @Component({ providers: [Listener]})
 * 
 * constructor(private listener:Listener)
 *
 * this.listener.observe('//localhost').subscribe(data=>this.data=data)
 * 
 */


import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';

const EventSource: any = window['EventSource'];

@Injectable()

export class Listener {

  constructor(private zone: NgZone) {}

  observe(sseUrl: string): Observable<any> {
    return new Observable<any>((obs: any) => {
      const eventSource = new EventSource(sseUrl);
      eventSource.onmessage = (evt: any) => {
        console.log(evt.data);
        this.zone.run(() => obs.next(evt.data));
      };

      return () => eventSource.close();

    });


  }

}