import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-play-options',
  templateUrl: './play-options.component.html',
  styleUrls: ['./play-options.component.scss']
})
export class PlayOptionsComponent implements OnInit {
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  public setSeriesType(type: string) {
    if (type === 'Even') {
      this.sharedService.sendSeriesType(2);
    } else if (type === 'Odd') {
      this.sharedService.sendSeriesType(1);
    } else {
      this.sharedService.sendSeriesType(0);
    }
  }
}
