import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  totalInputBox: Array<number> = [];
  inputValues: Array<number> = [];
  constructor() { 
    for (let i = 0; i < 100; i++) {
      this.totalInputBox[i] = i;         
    }
    this.inputValues.length = 10000;
    this.inputValues.fill(0);
  }  
  public getValue(input: string, i: number): void { 
    let value: number = parseInt(input);
    if (isNaN(value)) {
      value = 0;
    }
    this.inputValues[i] = value;
  }
  ngOnInit(): void {}
}
