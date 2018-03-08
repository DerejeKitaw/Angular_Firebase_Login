import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';
import { moveIn } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  email;
  password;
  error: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.googleLogin();
  }
  loginFb() {
    this.authService.facebookLogin();
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}
