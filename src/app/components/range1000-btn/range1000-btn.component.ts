import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-range1000-btn',
  templateUrl: './range1000-btn.component.html',
  styleUrls: ['./range1000-btn.component.scss']
})
export class Range1000BtnComponent implements OnInit {
  winningList: Array<number> = [];
  start: number = 0;
  end: number = 999;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.setStartValues(this.start, this.end)
  }

  public setStartValues(start: number, end: number) {
    console.log(start, end);
    this.start = start;
    this.end = end;
    this.sharedService.sendStartValue(start);
  }
}
