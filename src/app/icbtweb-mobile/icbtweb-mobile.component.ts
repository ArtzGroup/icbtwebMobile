import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icbtweb-mobile',
  templateUrl: './icbtweb-mobile.component.html',
  styleUrls: ['./icbtweb-mobile.component.scss'],
})
export class IcbtwebMobileComponent implements OnInit {
  libraryMenuOpen: boolean = false;
  hamburgerChecked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.libraryMenuOpen == true) {
      this.hamburgerChecked = false;
    }
  }

  minimizeMenu() {
    if (
      this.hamburgerChecked === false ||
      this.hamburgerChecked === undefined
    ) {
      this.hamburgerChecked = true;
    } else {
      this.hamburgerChecked = false;
      this.libraryMenuOpen = false;
    }
  }

  openLibraryMenu() {
    this.hamburgerChecked = true;

    this.libraryMenuOpen = true;
  }

  gotoDashboard() {
    this.hamburgerChecked = true;
    this.libraryMenuOpen = false;
  }

  gotoActiveModule() {
    this.hamburgerChecked = true;
    this.libraryMenuOpen = false;
  }

  gotoMessageSection() {
    this.hamburgerChecked = true;
    this.libraryMenuOpen = false;
  }

  closeMenu() {
    this.hamburgerChecked = false;
    this.libraryMenuOpen = false;
  }
}
