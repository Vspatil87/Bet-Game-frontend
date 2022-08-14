import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  totalInputBox: Array<number> = [];
  constructor() { 
    for (let i = 0; i < 100; i++) {
      this.totalInputBox[i] = i;         
    }
  }

  ngOnInit(): void {}
}
