import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NumberprojectsComponent} from './components/numberprojects/numberprojects.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'**',component:PagenotfoundComponent},
  {path:'numberprojects',component:NumberprojectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
