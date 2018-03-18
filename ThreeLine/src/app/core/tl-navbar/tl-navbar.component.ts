import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../shared/model/app-user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'tl-navbar',
  templateUrl: './tl-navbar.component.html',
  styleUrls: ['./tl-navbar.component.scss']
})
export class TlNavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
