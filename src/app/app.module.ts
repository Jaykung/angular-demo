import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { PlaygroundComponent } from './modules/playground/playground.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    PortfolioComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
