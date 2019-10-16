import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NumberprojectsComponent } from './components/Investment/numberprojects/numberprojects.component';
import { ChartsModule } from 'ng2-charts';

/**
 * Material Modules
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material';
import {MatToolbarModule} from  '@angular/material';
import { LevelofprojectsComponent } from './components/Investment/levelofprojects/levelofprojects.component';
import { TypeofentitiesComponent } from './components/Investment/typeofentities/typeofentities.component';
import { ProductivitystimulusComponent } from './components/Investment/productivitystimulus/productivitystimulus.component';
import { OwnpostgraduateresourcesComponent } from './components/Investment/ownpostgraduateresources/ownpostgraduateresources.component';
import { ExtensionandsocialprojectionComponent } from './components/Investment/extensionandsocialprojection/extensionandsocialprojection.component';
import { YoungresearchersuptcComponent } from './components/formation/youngresearchersuptc/youngresearchersuptc.component';
import { YoungresearcherscolcienciasComponent } from './components/formation/youngresearcherscolciencias/youngresearcherscolciencias.component';
import { HotbedsofresearchComponent } from './components/formation/hotbedsofresearch/hotbedsofresearch.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    NumberprojectsComponent,
    LevelofprojectsComponent,
    TypeofentitiesComponent,
    ProductivitystimulusComponent,
    OwnpostgraduateresourcesComponent,
    ExtensionandsocialprojectionComponent,
    YoungresearchersuptcComponent,
    YoungresearcherscolcienciasComponent,
    HotbedsofresearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
