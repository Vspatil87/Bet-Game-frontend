import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  start: number = 1000;
  end: number = 2000;
  constructor() { }

  ngOnInit(): void {
  }

}
