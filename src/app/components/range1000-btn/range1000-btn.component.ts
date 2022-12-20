import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range1000-btn',
  templateUrl: './range1000-btn.component.html',
  styleUrls: ['./range1000-btn.component.scss']
})
export class Range1000BtnComponent implements OnInit {
  winningList: Array<number> = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;
    }
  }

  ngOnInit(): void {
  }

}
