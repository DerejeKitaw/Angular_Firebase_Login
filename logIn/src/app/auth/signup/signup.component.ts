
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state = '';
  error: any;
  email;
  password;
  constructor(public authService: AuthService) { }

  ngOnInit() { }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
      this.error = this.authService.error;
    }
  }
}
