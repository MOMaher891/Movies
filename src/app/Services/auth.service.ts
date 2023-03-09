import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Router: Router) { }

  login(username: string, password: string) {
    if (username === "mm" && password === "123") {
      return 200;
    } else {
      return 404;
    }
  }

  logout() {
    this._Router.navigate(['/login']);
  }
}
