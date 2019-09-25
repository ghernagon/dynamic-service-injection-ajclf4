import { Component } from '@angular/core';
import { MyService } from './my.service';
import { MyService2 } from './my.service2';
import { DynamicService } from './dynamic-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [DynamicService, MyService, MyService2]
})
export class AppComponent  {
  name = 'Angular';
  private service: any;
  
  constructor(private dynService: DynamicService){
    
    // this.myService = injector.get<DynamicService>(DynamicService);

    // if( 1+1 == 2){
    //   this.myService = injector.get<MyService>(MyService);
    // } else {
    //   this.myService = injector.get<MyService2>(MyService2);
    // }

    this.service = this.dynService.getDynamicService();

    if (this.service) {
      console.log('DESDE COMPONENTE APP');
      this.service.prop1 = "HOLA";
      console.log(this.service.prop1);
      
      // setInterval(() => console.log(this.service.prop1), 15000);

    }

    
  }
}
