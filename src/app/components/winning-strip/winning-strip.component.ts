import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winning-strip',
  templateUrl: './winning-strip.component.html',
  styleUrls: ['./winning-strip.component.scss']
})
export class WinningStripComponent implements OnInit {
  winningList: Array<number> = []; 
  constructor() { 
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;    
    }
  }

  ngOnInit(): void {
  }

}
