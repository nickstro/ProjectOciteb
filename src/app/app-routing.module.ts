import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { InformationComponent } from './components/information/information.component';
import { GraphicsScreenComponent } from './components/graphics-screen/graphics-screen.component';
import { ApolloTestComponent } from './components/apollo-test/apollo-test.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'cardMenu/:menuId', component: CardMenuComponent},
  {path: 'information', component: ApolloTestComponent},
  {path: 'faculty_card/:faculty_id/faculty_tab/:tabId', component: GraphicsScreenComponent},
  //{path: 'faculties/:facultyId', component: HomeComponent},
  //{path: 'faculties/:facultyId/menus/:menuId', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
