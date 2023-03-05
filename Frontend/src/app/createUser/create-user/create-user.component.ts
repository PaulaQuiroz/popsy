import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
    oRolOptions: any[] = [];
    oDistritosOptions: any[] = [];
    oPuntosVentaOptions: any[] = [];
    oFormGroup: FormGroup = new FormGroup({
        nombres: new FormControl("", [Validators.required, Validators.minLength(1)]),
        apellidos: new FormControl("", [Validators.required, Validators.minLength(1)]),
        correo: new FormControl("", [Validators.required, Validators.email]),
        rol: new FormControl(null),
        distrito: new FormControl(null),
        puntoVenta: new FormControl(null),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        repeatPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
    oSavePuntoVenta: boolean =  false;
    oSaveRol: boolean =  false;

    constructor(
        private readonly iBackendService: BackendService
    ) {
        this.getRoles()
        this.getDistritos()
    }

    getRoles() {
        this.iBackendService.getRequest("rol").then((oRol) => {
            this.oRolOptions = oRol;
        });
    }

    getDistritos() {
        this.iBackendService.getRequest("distrito").then((oDistritos) => {
            this.oDistritosOptions = oDistritos;
        });
    }

    getPuntosVenta(oEvent: any, idDistrito: string) {
        this.iBackendService.getRequest("punto-venta/distrito/" + idDistrito)
            .then((oPuntosVenta) => {
                this.oPuntosVentaOptions = oPuntosVenta;
            });
    }

    onChangePuntoVenta(){
        let oRol = this.oRolOptions.filter(oItem => oItem.id === this.oFormGroup.value.rol)[0]

        if(oRol.nombre.toUpperCase() != "GERENTE" && this.oFormGroup.value.puntoVenta.length > 1){
            Swal.fire('Solo puede seleccionar un punto de venta')
            return;
        }
    }

    createUser(){
        if(!this.oFormGroup.valid){
            Swal.fire('Por favor, revise los campos del formulario')
            return;
        }

        if(this.oFormGroup.value.password !== this.oFormGroup.value.repeatPassword){
            Swal.fire('Las contraseñas deben de ser iguales')
            return;
        }

        let oRol = this.oRolOptions.filter(oItem => oItem.id === this.oFormGroup.value.rol)[0]

        if(oRol.nombre.toUpperCase() != "GERENTE" && this.oFormGroup.value.puntoVenta.length > 1){
            Swal.fire('Solo puede seleccionar un punto de venta')
            return;
        }

        this.iBackendService.postRequest("usuario", {
            "nombres": this.oFormGroup.value.nombres,
            "apellidos": this.oFormGroup.value.apellidos,
            "correo": this.oFormGroup.value.correo,
            "password": this.oFormGroup.value.password
        }).then((oUsuario: any) => {
            this.iBackendService.postRequest("rol-usuario", {
                "rolId": this.oFormGroup.value.rol,
                "usuarioId": oUsuario.id
            }).then(() => {
                this.oSaveRol = true;
                this.createUserEnd()
            });

            this.iBackendService.postRequest("usuario-punto-venta/masivo", {
                "usuarioId": oUsuario.id,
                "puntosVentaId": this.oFormGroup.value.puntoVenta
            }).then(() => {
                this.oSavePuntoVenta = true;
                this.createUserEnd()
            });
        });
    }

    createUserEnd(){
        if(this.oSaveRol && this.oSavePuntoVenta){
            Swal.fire('El usuario se ha creado de forma correcta')
                .then(() => {
                    window.location.reload();
                })
        }
    }
}


