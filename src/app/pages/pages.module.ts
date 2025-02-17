import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ComponentsModule } from '../components/components.module';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


@NgModule({
  declarations: [
    Error404Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule { }
