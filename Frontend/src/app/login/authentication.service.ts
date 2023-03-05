import { Injectable } from '@angular/core';
import {BackendService} from "../backend.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private readonly tokenKey = 'token';

  constructor(
      private readonly backendService: BackendService,
      private readonly router: Router
  ) { }

  

    public login(auth: {correo: string, password: string}, callbackError: any): void {
        this.backendService.postRequest("auth/login", auth)
        .then((oResult: any) => {
            localStorage.setItem(this.tokenKey, oResult.token);
            this.router.navigate(['/pedidos']).then();
        }).catch((oError) => callbackError(oError));
    }

    public register(email: string, password: string): void {
        this.backendService.postRequest("s", {
            email,
            password
        }).then((oToken: any) => {
            localStorage.setItem(this.tokenKey, oToken);
            this.router.navigate(['/']).then();
        });
    }

    public logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']).then();
    }

    public isLoggedIn(): boolean {
        let token = localStorage.getItem(this.tokenKey);
        return token != null && token.length > 0;
    }

    public getToken(): string | null {
        return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
    }
}
