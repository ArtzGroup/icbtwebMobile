import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  libraryMenuOpen: boolean = false;
  hamburgerChecked: boolean = false;
  forHoverEffect: boolean = false;
  constructor() {}

  ngOnInit(): void {}
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

  closeMenu() {}

  toggleVisibility(e) {
    const x = e.target.checked;
    console.log(this.hamburgerChecked);
  }

  mouseEnter() {
    if (this.forHoverEffect == false) {
      this.forHoverEffect = true;
    }
  }

  mouseLeave() {
    if (this.forHoverEffect == true) {
      this.forHoverEffect = false;
    }
  }
}
