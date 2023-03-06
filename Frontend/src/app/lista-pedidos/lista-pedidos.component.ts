import { Component, ViewEncapsulation } from '@angular/core';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { ICategoriaMenu, IProductPedido, ITipoPedidoOption, IUserSession } from "./lista-pedidos.model";
import { BreakpointObserver } from "@angular/cdk/layout";
import { BackendService } from "../backend.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DetallePedidoDialogComponent } from "../detalle-pedido-dialog/detalle-pedido-dialog.component";
import Swal from 'sweetalert2';
moment.locale("es");

@Component({
    selector: 'app-lista-pedidos',
    templateUrl: './lista-pedidos.component.html',
    styleUrls: ['./lista-pedidos.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ListaPedidosComponent {
    protected readonly faAnglesRight = faAnglesRight;
    protected readonly faAnglesLeft = faAnglesLeft;
    protected phoneMenuShow = false;
    protected categoriasMenuShow = false;
    protected categoriasMenu: ICategoriaMenu[] = [];
    protected tipoPedidoOptions: ITipoPedidoOption[] = [];
    protected readonly deviceIsDesktop;
    protected readonly _fechaSistema: string = moment(new Date()).format("DD MMMM yyyy");
    protected _selectCategoria?: ICategoriaMenu;
    protected _oUserSession: IUserSession = {
        id: "15E89D7D-7DB8-ED11-8924-34735A9C3F29",
        nombres: "Paula",
        apellidos: "Quiroz",
        correo: "Paula.quiroz@example.com",
        oPuntoVenta: {
            id: "D867F053-75B8-ED11-8924-34735A9C3F29",
            nombre: "Calle 100"
        },
        oPuntosVenta: [{
            id: "D867F053-75B8-ED11-8924-34735A9C3F29",
            nombre: "Calle 100"
        }]
    } as IUserSession;
    protected oUserInfoGroup: FormGroup = new FormGroup({
        tipoPedido: new FormControl("", [Validators.required])
    });
    protected oDataTable: any[] = [];
    protected readonly oColumnsTable: string[] = [
        "nombreProducto", "presentacion", "stockActual", "stockTransito",
        "cantidadSugerida", "cantidadSolicitada"];

    constructor(
        protected readonly breakpointObserver: BreakpointObserver,
        private readonly backendService: BackendService,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog
    ) {
        this.deviceIsDesktop = this.breakpointObserver.isMatched('(min-width: 1024px)');

        this.backendService.getRequest("usuario-punto-venta/usuario").then((oUsuario) => {
            this._oUserSession = oUsuario as IUserSession;
            this._oUserSession.oPuntoVenta = this._oUserSession.oPuntosVenta[0];
            this.getCategorias();
            this.getTipoPedido();
        });
    }

    getCategorias() {
        this.backendService.getRequest("producto-punto-venta/categorias/" + this._oUserSession.oPuntoVenta.id).then((oResponse) => {
            this.categoriasMenu = (oResponse as string[]).map((oItem: any, i: number) => {
                return {
                    categoriaId: i + 1,
                    title: oItem.categoria,
                    count: oItem.cantidad,
                    countSelect: 0,
                    oProductSelect: []
                }
            });

            this._selectCategoria = this.categoriasMenu[0];

            this.getProductoByCategoria(this._selectCategoria);
        }).catch((oError) => {
            console.log(oError)
        })
    }

    getTipoPedido() {
        this.backendService.getRequest("tipo-pedido").then((oResponse) => {
            this.tipoPedidoOptions = (oResponse as any[]).map((oItem: any, i: number) => {
                return {
                    id: oItem.id,
                    nombre: oItem.nombre
                }
            })
        }).catch((oError) => {
            console.log(oError)
        })
    }

    getProductoByCategoria(oCategoria: ICategoriaMenu) {
        if (!oCategoria) {
            this.oDataTable = [];
            return;
        }

        this.backendService.getRequest("producto-punto-venta/byCategoria/" + oCategoria.title + "/" + this._oUserSession.oPuntoVenta.id).then((oResponse) => {
            this.oDataTable = oResponse;
        }).catch((oError) => {
            console.log(oError)
        })
    }

    onChangeCantidadSolicitada(oEvent: any, oProductoPuntoVenta: any) {
        let valorMaximo: number = oProductoPuntoVenta.cantidadProductoMaxima - oProductoPuntoVenta.stockActual -
            oProductoPuntoVenta.stockTransito;
        let valorSolicitado: number = parseInt(oEvent.target.value);

        let oProductoPedido = {
            cantidad: valorSolicitado,
            idProducto: oProductoPuntoVenta.producto.id,
            idProductoPuntoVenta: oProductoPuntoVenta.id,
            categoria: oProductoPuntoVenta.producto.categoriaProducto,
            nombre: oProductoPuntoVenta.producto.nombre
        };

        let oCategoria = this.categoriasMenu.filter((oItem) => oItem.title === oProductoPedido.categoria)[0];

        if (valorSolicitado >= valorMaximo || valorSolicitado < 0 || isNaN(valorSolicitado)) {
            oEvent.target.value = 0;
            this.removeProductToCategoria(oCategoria, oProductoPedido);
            this._snackBar.open(`Debe de ingresar un valor entre 0 y ${valorMaximo}`, 'Cerrar');
            return;
        }

        if (valorSolicitado == 0) {
            this.removeProductToCategoria(oCategoria, oProductoPedido);
            return;
        }

        let productOld = oCategoria.oProductSelect.filter((oItem) => oItem.idProductoPuntoVenta === oProductoPuntoVenta.id)

        if (productOld.length == 0) {
            oCategoria.oProductSelect.push(oProductoPedido);
        } else {
            oCategoria.oProductSelect = oCategoria.oProductSelect.map((oItem) => {
                if (oItem.idProductoPuntoVenta === oProductoPuntoVenta.id) {
                    return oProductoPedido;
                } else {
                    return oItem;
                }
            });
        }
    }

    removeProductToCategoria(oCategoria: ICategoriaMenu, oProductoPedido: IProductPedido) {
        for (let i = 0; i < oCategoria.oProductSelect.length; i++) {
            const oProduct = oCategoria.oProductSelect[i];

            if (oProduct.idProductoPuntoVenta === oProduct.idProductoPuntoVenta) {
                oCategoria.oProductSelect.splice(i, 1);
            }
        }
    }

    resumenPedido() {
        let categoriasPedidos = this.categoriasMenu.filter((oItem) => oItem.oProductSelect.length > 0);

        if (categoriasPedidos.length === 0) {
            Swal.fire('Primero debe de seleccionar un producto')
            return;
        }

        if (!this.oUserInfoGroup.valid) {
            Swal.fire('Primero debe de seleccionar tipo de pedido')
            return;
        }

        let oDialog = this.dialog.open(DetallePedidoDialogComponent, {
            data: {
                oProducto: categoriasPedidos,
                oCabecera: {
                    fechaSistema: this._fechaSistema,
                    oUser: this._oUserSession,
                    tipoPedidoId: this.oUserInfoGroup.controls["tipoPedido"].value
                },
                complementos: {
                    tiposDePedido: this.tipoPedidoOptions
                }
            }
        });

        oDialog.afterClosed().subscribe((result) => {
            console.log(result)
        })
    }
}
