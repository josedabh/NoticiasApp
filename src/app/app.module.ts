import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasModule } from './noticias/noticias.module';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NoticiasComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoticiasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
