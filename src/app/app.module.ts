import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

/**
 * Material Modules
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { HbarComponent } from './components/graphics/hbar/hbar.component';
import { StackedComponent } from './components/graphics/stacked/stacked.component';
import { TableComponent } from './components/graphics/table/table.component';
import { WavesModule, TableModule } from 'angular-bootstrap-md';
import { PieComponent } from './components/graphics/pie/pie.component';
import { LineComponent } from './components/graphics/line/line.component';
import { MixedComponent } from './components/graphics/mixed/mixed.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { InformationComponent } from './components/information/information.component';
import { GraphicsScreenComponent } from './components/graphics-screen/graphics-screen.component';
import { GraphQLModule } from './graphql/graphql.module';
import { ComparationComponent } from './components/comparation/comparation.component';


@NgModule({
  declarations: [
    AppComponent,
    HbarComponent,
    StackedComponent,
    TableComponent,
    PieComponent,
    LineComponent,
    MixedComponent,
    CardMenuComponent,
    WelcomeComponent,
    InformationComponent,
    GraphicsScreenComponent,
    ComparationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
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
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://backociteb.herokuapp.com/graphql'
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
