import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private startValueSource = new Subject<number>();
  private intialStartValueSource = new Subject<number>();
  private seriesTypeSource = new Subject<number>();
  startValue$ = this.startValueSource.asObservable();
  initialStart$ = this.intialStartValueSource.asObservable();
  seriesType$ = this.seriesTypeSource.asObservable();

  constructor() { }

  sendStartValue(value: number) {
    this.startValueSource.next(value);
  }

  sendIntialStartValue(value: number) {
    this.intialStartValueSource.next(value);
  }
  
  sendSeriesType(value: number) {
    this.seriesTypeSource.next(value); // 0 -> All , 1 -> Odd , 2 -> Even
  }
}
