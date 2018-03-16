import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TlNavbarComponent } from './tl-navbar/tl-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TlNavbarComponent
  ],
  declarations: [LoginComponent, HomeComponent, TlNavbarComponent]
})
export class CoreModule { }
