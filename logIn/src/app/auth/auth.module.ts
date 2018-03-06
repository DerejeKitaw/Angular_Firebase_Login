import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailComponent, SignupComponent, MembersComponent]
})
export class AuthModule { }
