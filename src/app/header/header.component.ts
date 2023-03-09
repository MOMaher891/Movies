import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _Router: Router, private _Auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this._Router.navigate(['/home']);
  }

  logout() {
    this._Auth.logout();
  }
}
