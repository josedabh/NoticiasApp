import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticiasModule } from './noticias/noticias.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    Error404Component,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NoticiasModule
  ]
})
export class ComponentsModule { }
