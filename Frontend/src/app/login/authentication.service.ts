import { Injectable } from '@angular/core';
import {BackendService} from "../backend.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


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
        this.backendService.postRequestCatch("auth/login", auth)
        .then((oResult: any) => {
            if(window.location.origin.includes("localhost")){
                localStorage.setItem(this.tokenKey, oResult.token);
            }
            
            this.router.navigate(['/']).then();
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
        if(window.location.origin.includes("localhost:4200")){
            let token = localStorage.getItem(this.tokenKey);
           
          
            return token != null && token.length > 0;
            
            
        } else {
            return document.cookie.includes("token");
        }
    }

    public getToken(): string | null {
       
        return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
    }
}
