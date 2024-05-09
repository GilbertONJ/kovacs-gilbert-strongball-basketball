import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  loadingSubscription?: Subscription;
  loading: boolean = false;

  constructor(private router: Router, private authservice: AuthService){

  }

  async login(){
    this.loading = true;
    this.authservice.login(this.loginForm.get('email')?.value as string, this.loginForm.get('password')?.value as string).then(cred => {
      this.router.navigate(['/home']);
      this.loading = false;
    }).catch(error => {
      this.loading = false;
    });
  }
}
