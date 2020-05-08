import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('mySidebar').style.width = '20%';
    document.getElementById('main').style.width = '80%';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '60px';
    document.getElementById('main').style.width = 'calc(100vw - 60px)';
  }
}
