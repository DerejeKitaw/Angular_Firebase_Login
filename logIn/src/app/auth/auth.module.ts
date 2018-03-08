
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

const firebaseConfig = {
  // insert you config here
};
@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  declarations: [EmailComponent, SignupComponent, MembersComponent, LoginComponent]
})
export class AuthModule { }
