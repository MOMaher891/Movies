import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMsg = "";
  errorNum = false;
  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  // CheckLogin() {
  //   if (this.username.trim().length === 0) {
  //     this.errorMsg = "Username field is required";
  //     this.errorNum = true;
  //   } else if (this.password.trim().length === 0) {
  //     this.errorMsg = "Password field is required";
  //     this.errorNum = true;
  //   } else if (this.username == "mm" && this.password == "123") {
  //     this._router.navigate(['/home']);
  //     this.errorNum = false;
  //   } else {
  //     this.errorMsg = "Username or password Invalid";
  //     this.errorNum = true;
  //   }
  // }

  CheckLogin() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username field is required";
      this.errorNum = true;
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password field is required";
      this.errorNum = true;
    } else {
      this.errorNum = false;
      this.errorMsg = "";
      let re = this._authService.login(this.username, this.password);
      if (re === 200) {
        this._router.navigate(['/home']);
        console.log(re);

      } else {
        this.errorMsg = "Username or password Invalid";
        this.errorNum = true;
      }
    }
  }
}
