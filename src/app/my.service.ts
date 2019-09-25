import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  prop1 = 'Hello service'
  constructor() {
    console.log('CONSTRUCTOR MYSERVICE');
  }

}