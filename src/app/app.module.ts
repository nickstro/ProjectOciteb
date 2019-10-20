import { PokeapiService } from './pokeapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DropdownlistComponent } from './components/dropdownlist/dropdownlist.component';
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
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { HbarComponent } from './components/graphics/hbar/hbar.component';
import { StackedComponent } from './components/graphics/stacked/stacked.component';
import { TableComponent } from './components/graphics/table/table.component';
import { WavesModule, TableModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    DropdownlistComponent,
    LeftsidebarComponent,
    HbarComponent,
    StackedComponent,
    TableComponent
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
    WavesModule,
    TableModule,
    AppRoutingModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    PokeapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
