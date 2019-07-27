import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: { email: string, password: string } = { email: null, password: null };
  public errorMsg: string = null;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm() {
    this.authService.authanticateUser(this.user).subscribe(response => {
      this.errorMsg = null;
      if (response['token']) {
        localStorage.setItem('loginUser', JSON.stringify({ 'token': response['token'] }));
        this.authService.setUserToken();
        this.router.navigate([`users`]);
      }
    }, error => {
      this.errorMsg = error['error']['error'];
    });
  }

}
