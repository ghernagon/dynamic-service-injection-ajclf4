import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic-service';
import { MyService } from '../my.service';
import { MyService2 } from '../my.service2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [DynamicService, MyService, MyService2]
})
export class TestComponent implements OnInit {
  private service: any;

  constructor(private dynService: DynamicService) {
    this.service = this.dynService.getDynamicService();

    if (this.service) {
      console.log('DESDE COMPONENTE TEST');
      this.service.prop1 = "HOLA5";
      console.log(this.service.prop1);
    }
  }

  ngOnInit() {
  }

}