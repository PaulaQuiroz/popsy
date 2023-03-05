import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}


