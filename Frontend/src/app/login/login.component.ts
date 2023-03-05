import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  protected formLogin: FormGroup = new FormGroup({
    correo: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.minLength(8)])
  });

  constructor(
    private readonly iAuthenticationService: AuthenticationService
  ){

  }

  login(oEvent: any) {
    if (!this.formLogin.valid) {
     
      return;
    }
    this.iAuthenticationService.login(this.formLogin.value, () => {
      
    })
  }
}







function logeo() {
  throw new Error('Usuario no valido.');
}
