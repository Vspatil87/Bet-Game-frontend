import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-strip',
  templateUrl: './info-strip.component.html',
  styleUrls: ['./info-strip.component.scss']
})
export class InfoStripComponent implements OnInit {
  winningList: Array<number> = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;
    }
  }

  ngOnInit(): void {
  }

}
