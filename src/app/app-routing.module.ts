import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'activeModule', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
