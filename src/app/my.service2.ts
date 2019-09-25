import { Injectable } from '@angular/core';

@Injectable()
export class MyService2{

  prop1 = 'Hello service2'
  constructor() {
    console.log('CONSTRUCTOR MYSERVICE 2');
  }

}