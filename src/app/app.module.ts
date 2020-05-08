import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IcbtwebMobileComponent } from './icbtweb-mobile/icbtweb-mobile.component';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WholeSectionComponent } from './whole-section/whole-section.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, IcbtwebMobileComponent, SideMenuComponent, MainContentComponent, WholeSectionComponent, DashboardHeaderComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
