import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NumberprojectsComponent} from './components/Investment/numberprojects/numberprojects.component';
import { HbarComponent} from './components/hbar/hbar.component';
import { StackedComponent } from './components/stacked/stacked.component';
import { TableComponent} from './components/table/table.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faculties/:facultyId', component: HomeComponent},
  {path: 'faculties/:facultyId/menus/:menuId', component: HomeComponent},
  {path: 'hbar', component: HbarComponent},
  {path: 'stacked', component: StackedComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
