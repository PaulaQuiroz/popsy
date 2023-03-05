import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICategoriaMenu, IProductPedido, ITipoPedidoOption, IUserSession} from "../lista-pedidos/lista-pedidos.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { BackendService } from '../backend.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-pedido-dialog',
  templateUrl: './detalle-pedido-dialog.component.html',
  styleUrls: ['./detalle-pedido-dialog.component.css']
  
})
export class DetallePedidoDialogComponent {
    protected oDatasource: IProductPedido[] = [];
    protected readonly oColumnsTable: string[] = [
        "nombreProducto", "cantidadSolicitada"];
    protected readonly _oUserSession: IUserSession;
    protected readonly _fechaSistema: string;
    protected readonly _tipoPedidoId: string;
    protected readonly tipoPedidoOptions: ITipoPedidoOption[] = [];
    _snackBar: any;
    constructor(
        @Inject(MAT_DIALOG_DATA) data: {oProducto: ICategoriaMenu[], oCabecera: any, complementos: any},
        private readonly backendService: BackendService,
    ) {
        this._oUserSession = data.oCabecera.oUser;
        this._fechaSistema = data.oCabecera.fechaSistema;
        this._tipoPedidoId = data.oCabecera.tipoPedidoId;
        this.tipoPedidoOptions = data.complementos.tiposDePedido;
        data.oProducto.forEach((oItem) => {
            oItem.oProductSelect.forEach((oItem2: IProductPedido) => {
                this.oDatasource.push(oItem2);
            });
        });

        console.log(data)
    }
    
 
    async guardarPedido(){
        console.log("guardarPedido")
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu pedido ha sido guardado con exito¡',
            showConfirmButton: false,
            timer: 1500
          })
          
        let estados = await this.backendService.getRequest("estado-pedido")
        
        estados = estados.filter((oItem: any) => 
            oItem.codigo === "CE01")[0]
        
        let oPedido: any = await this.backendService.postRequest("pedido", {
            "estadoPedidoId": estados.id,
            "tipoPedidoId": this._tipoPedidoId,
            "puntoVentaId": this._oUserSession.oPuntoVenta.id,
            "usuarioId": this._oUserSession.id
        })

        for (let i = 0; i < this.oDatasource.length; i++) {
            const element = this.oDatasource[i];
            await this.backendService.postRequest("producto-pedido", {
                "productoId": element.idProducto,
                "pedidoId": oPedido.id,
                "cantidad": element.cantidad
            });
        }
        window.location.reload();
        
    }
}


