import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DesignerComponent } from './designer/designer.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'pub/homepage', pathMatch: 'full' },
  { path: 'pub/login', component: LoginComponent },
  { path: 'pub/signup', component: SignupComponent },
  { path: 'pub/homepage', component: HomePageComponent },
  { path: 'designer',
  canActivate: [AuthGuard],
   loadChildren: `app/designer/designer.module#DesignerModule` ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
