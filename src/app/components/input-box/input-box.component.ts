import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  winningList: Array<number> = [];
  start: number = 0;

  constructor(private sharedService: SharedService) {
    this.sharedService.initialStart$.subscribe((startValue) => {
      this.start = startValue;
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;
    }
  }
}
