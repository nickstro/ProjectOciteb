import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComparationComponent } from './components/comparation/comparation.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { InformationComponent } from './components/information/information.component';
import { GraphicsScreenComponent } from './components/graphics-screen/graphics-screen.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'cardMenu/:menuId', component: CardMenuComponent},
  {path: 'information', component: InformationComponent},
  {path: 'faculty_card/:faculty_id/faculty_tab/:tabId', component: GraphicsScreenComponent},
  {path: 'faculty_card_one/:faculty_id_one/faculty_card_two/:faculty_id_two/faculty_tab/:tabId', component: ComparationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
