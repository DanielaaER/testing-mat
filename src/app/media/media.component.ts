import { Component } from '@angular/core';
import { DevService } from '../services/dev.service';
import { ProxyService } from '../services/proxy.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  constructor(private dev: DevService, private proxy: ProxyService) {}

  column1: any[] = [];
  column2: any[] = [];

  calculateMediaColumn1(data: number[], column: number): number {
    let sum = 0;
    data.forEach((item: number) => {
      sum += item;
    });
    console.log ("column1");
    console.log (sum/data.length);
    return sum / data.length;
  }

  calculateMediaColumn2(data: number[], column: number): number {
    let sum = 0;
    data.forEach((item: number) => {
      sum += item;
    });
    console.log ("column2");
    console.log (sum/data.length);
    return sum / data.length;
  }

  ngOnInit(): void {
    this.proxy.getProxyData().subscribe((data: any) => {
      this.column1 = data.map((item: any) => {
        
        console.log(item);
        return {
          column1: item.proxy_size, 
        };
      });
    });


    this.dev.getDevData().subscribe((data: any) => {
      this.column1 = data.map((item: any) => {
        
        console.log(item);
        return {
          column2: item.dev_hours, 
        };
      });
    });
  }
}