import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  winningList: Array<number> = [];
  start: number = 0;
  seriesType: number = 0;
  qtyDisabled: boolean = true;
  ptsDisabled: boolean = true;
  valueArray: Array<number> = [];
  constructor(private sharedService: SharedService, private _electronService: ElectronService) {
    this.sharedService.initialStart$.subscribe((startValue) => {
      this.start = startValue;
    });

    this.sharedService.seriesType$.subscribe((series) => {
      this.seriesType = series;
    })
  }

  ngOnInit(): void {
    this.valueArray.length = 10000;
    this.valueArray.fill(0);
    for (let i = 0; i < 10; i++) {
      this.winningList[i] = i;
    }
    // if (this._electronService.isElectronApp){
    //   this._electronService.ipcRenderer.sendSync('save', 123)
    //   this._electronService.ipcRenderer.on("sigin", (event, args) => {
    //     console.log((args));
    //   });
    // }
    if (window.electronAPI) {
      window.electronAPI.setTitle('Bet-Game!');
    }
  }
  
  public setValue(index: number, event: any) {
    let val = parseInt(event.target.value);
    if (!isNaN(val)) {
      this.valueArray[index] = val;
    } else {
      this.valueArray[index] = 0;
    }
    console.log("value array == ", this.valueArray);
  }
}
