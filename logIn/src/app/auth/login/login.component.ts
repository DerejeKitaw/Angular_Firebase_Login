import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.googleLogin();
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
