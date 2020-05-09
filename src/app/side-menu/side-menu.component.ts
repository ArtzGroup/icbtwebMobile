import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  libraryMenuOpen: boolean = false;
  hamburgerChecked: boolean = false;
  forHoverEffect: boolean = false;

  constructor(private router: Router) {}

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
    this.hamburgerChecked = false;
    this.libraryMenuOpen = false;
    this.forHoverEffect = false;
    this.router.navigate(['/home']);
  }

  gotoActiveModule() {
    this.hamburgerChecked = false;
    this.libraryMenuOpen = false;
    this.forHoverEffect = false;
    this.router.navigate(['/activeModule']);
  }

  gotoMessageSection() {
    this.hamburgerChecked = false;
    this.libraryMenuOpen = false;
    this.forHoverEffect = false;
  }

  closeMenu() {
    this.hamburgerChecked = false;
    this.libraryMenuOpen = false;
    this.forHoverEffect = false;
  }

  mouseEnter() {
    if (this.forHoverEffect == false && this.hamburgerChecked == true) {
      this.hamburgerChecked = false;
      this.forHoverEffect = true;
    }
  }

  mouseLeave() {
    if (this.forHoverEffect == true && this.hamburgerChecked == false) {
      this.hamburgerChecked = true;
      this.forHoverEffect = false;
      console.log(this.hamburgerChecked);
    }
  }
}
