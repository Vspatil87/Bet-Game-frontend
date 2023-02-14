import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  winningList: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;
    }
  }

}
