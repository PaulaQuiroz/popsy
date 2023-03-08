import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AyudaComponent} from './ayuda/ayuda.component';
import {ListaPedidosComponent} from './lista-pedidos/lista-pedidos.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { DetallePedidoDialogComponent } from './detalle-pedido-dialog/detalle-pedido-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './createUser/create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
    declarations: [
        AppComponent,
        AyudaComponent,
        ListaPedidosComponent,
        DetallePedidoDialogComponent,
        LoginComponent,
        CreateUserComponent,
        HomeComponent,
        EditUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatListModule,
        HttpClientModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        MenubarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
