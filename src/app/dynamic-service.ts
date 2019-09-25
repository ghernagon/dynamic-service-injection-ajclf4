import { Injectable, Injector } from '@angular/core';
import { MyService } from './my.service';
import { MyService2 } from './my.service2';

@Injectable()
export class DynamicService {
  
  private service: any;

  constructor(private injector: Injector) {}

  getDynamicService(x) {
    if( x == 1){
      this.service = this.injector.get<MyService>(MyService);
    } else {
      this.service = this.injector.get<MyService2>(MyService2);
    }

    return this.service;
  }

  // constructor(private myService: MyService, private myService2: MyService2) {}

  // getDynamicService(x) {
  //   if( x == 1){
  //     this.service = this.myService;
  //   } else {
  //     this.service = this.myService2;
  //   }

  //   return this.service;
  // }
}