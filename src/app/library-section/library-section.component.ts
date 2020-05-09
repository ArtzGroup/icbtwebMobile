import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-section',
  templateUrl: './library-section.component.html',
  styleUrls: ['./library-section.component.scss'],
})
export class LibrarySectionComponent implements OnInit {
  @Input() libraryMenuOpen: boolean = false;
  activeModuleOpen: boolean = false;
  activeModuleOpenn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  activeModuleBlockOpen() {
    if (this.activeModuleOpen == false) {
      this.activeModuleOpen = true;
    } else {
      this.activeModuleOpen = false;
    }
    this.router.navigate(['/menu']);
  }

  activeModuleBlockOpenn() {
    if (this.activeModuleOpenn == false) {
      this.activeModuleOpenn = true;
    } else {
      this.activeModuleOpenn = false;
    }
    this.router.navigate(['/menu']);
  }
}
