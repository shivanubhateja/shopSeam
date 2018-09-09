import { Component, OnInit } from '@angular/core';
import { LoginDetailsModel } from './login-details.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails:LoginDetailsModel = new LoginDetailsModel("", "");
  loginError:string = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginFormSubmit = () => {
    this.loginError = null;
    if(this.loginDetails.userName === 'admin' && this.loginDetails.password === 'admin123'){
      this.router.navigate(['/products']);
      localStorage.setItem('loggedIn', 'true');
    } else {
      this.loginError = "Invalid Credentials";
      localStorage.setItem('loggedIn', 'false');
    }
  }
}
