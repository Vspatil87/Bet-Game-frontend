import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  start: number = 0;
  end: number = 1000;
  value: number = this.start;
  constructor(private sharedService: SharedService) {
    this.sharedService.startValue$.subscribe((startValue) => {
      this.start = startValue;
      this.value = startValue;
      this.end = startValue + 1000;
      this.setValues(this.value);
    });
  }

  ngOnInit(): void { }

  public setValues(value: number) {
    this.value = value;
    this.sharedService.sendIntialStartValue(value);
  }

  public pageUp(val: number) {
    this.value = val - 100;
    if (this.value < this.start) {
      this.value = (this.end - 100);
    }
    this.sharedService.sendIntialStartValue(this.value);
  }

  public pageDown(val: number) {
    this.value = val + 100;
    if ((this.value + 100) > this.end) {
      this.value = this.start;
    }
    this.sharedService.sendIntialStartValue(this.value);
  }
}
