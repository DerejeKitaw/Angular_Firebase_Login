import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// firebase import
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DesignerModule } from './designer/designer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    AppRoutingModule,
    FormsModule,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
