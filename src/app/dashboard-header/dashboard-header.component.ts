import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  @Input() libraryMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
