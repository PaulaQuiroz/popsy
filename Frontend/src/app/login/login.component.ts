import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  protected formLogin: FormGroup = new FormGroup({
    correo: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    private readonly iAuthenticationService: AuthenticationService
  ) {
  }

  login(oEvent: any) {
    if (!this.formLogin.valid) {
      Swal.fire("Debe diligenciar usuario y contraseña!");
      return;
    }
    else {
      this.iAuthenticationService.login(this.formLogin.value, () => {
        Swal.fire("Usuario y/o contraseña invalido!");
      })
    }
  }
}







function logeo() {
  throw new Error('Usuario no valido.');
}
