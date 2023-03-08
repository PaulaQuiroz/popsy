import { Component, ViewChild } from '@angular/core';
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
    oOrganizacionVentasOptions: any[] = [];
    oDistritosOptions: any[] = [];
    oPuntosVentaOptions: any[] = [];
    oFormGroup: FormGroup = new FormGroup({
        nombres: new FormControl("", [Validators.required, Validators.minLength(1)]),
        apellidos: new FormControl("", [Validators.required, Validators.minLength(1)]),
        correo: new FormControl("", [Validators.required, Validators.email]),
        rol: new FormControl(null, [Validators.required]),
        organizacionVentas:new FormControl(null, [Validators.required]),
        distrito: new FormControl(null, [Validators.required]),
        puntoVenta: new FormControl(null, [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        repeatPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
    oSavedistritoVenta: boolean =  false;
    oSavePuntoVenta: boolean =  false;
    oSaveRol: boolean =  false;

    constructor(
        private readonly iBackendService: BackendService
    ) {
        this.iBackendService.getRequest("usuario/roles").then((oUsuario) => {
            this.getRoles(oUsuario)
        });
        
        this.getOrganizacionVentas();

        ["nombres", "apellidos", "correo", "rol", "organizacionVentas", "distrito",
            "puntoVenta", "password", "repeatPassword"].forEach((oItem) => {
                
                this.oFormGroup.controls[oItem].markAllAsTouched()
            })
    }

    getRoles(oUsuario: any) {
        this.iBackendService.getRequest("rol").then((oRol) => {
            if(oUsuario.roles.includes("SUPER USUARIO")){
                this.oRolOptions = oRol;
            } else if (oUsuario.roles.includes("GERENTE")){
                this.oRolOptions = oRol.filter((oItem: any) => {
                    return [
                        "ADMINISTRADOR",
                        "ADMINISTRADOR SUPLENTE"
                    ].includes(oItem.nombre.toUpperCase())
                });
            }
        });
    }

    getOrganizacionVentas(){
        this.iBackendService.getRequest("organizacion-ventas").then((oOrganizacionVentas) => {
            this.oOrganizacionVentasOptions = oOrganizacionVentas;
        });
    }

    getDistritos(oEvent: any, idOrganizacionVenta: string) {
        this.iBackendService.getRequest("distrito/organizacion-venta/" + idOrganizacionVenta).then((oDistritos) => {
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
        }).catch(oError => {
            Swal.fire(oError.message)
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


