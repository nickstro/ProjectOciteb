import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { InformationComponent } from './components/information/information.component';
import { GraphicsScreenComponent } from './components/graphics-screen/graphics-screen.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'cardMenu/:menuId', component: CardMenuComponent},
  {path: 'information', component: InformationComponent},
  {path: 'menus/:menuId/tabs/:tabId', component: GraphicsScreenComponent},
  //{path: 'faculties/:facultyId', component: HomeComponent},
  //{path: 'faculties/:facultyId/menus/:menuId', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
