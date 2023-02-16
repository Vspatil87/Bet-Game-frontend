import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private startValueSource = new Subject<number>();
  private intialStartValueSource = new Subject<number>();
  startValue$ = this.startValueSource.asObservable();
  initialStart$ = this.intialStartValueSource.asObservable();

  constructor() { }

  sendStartValue(value: number) {
    this.startValueSource.next(value);
  }

  sendIntialStartValue(value: number) {
    this.intialStartValueSource.next(value);
  }
}
