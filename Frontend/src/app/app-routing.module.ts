import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AyudaComponent} from "./ayuda/ayuda.component";
import {ListaPedidosComponent} from "./lista-pedidos/lista-pedidos.component";
import {AuthGuard} from "./login/auth.guard";
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './createUser/create-user/create-user.component';
import { NoAuthGuard } from './login/no-auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [NoAuthGuard]
    },
    {
        path: "createUser",
        component: CreateUserComponent,
        canActivate: [AuthGuard]
    },
 
    {
        path: "pedidos",
        component: ListaPedidosComponent,
        canActivate: [AuthGuard]
    },
    
    {
        path: "ayuda",
        component: AyudaComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
