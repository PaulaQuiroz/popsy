export interface IMenuOption {
    menuId: number

    iconUrl?: string

    title: string

    count?: number

    callback: any
}

export interface ICategoriaMenu {
    categoriaId: number

    iconUrl?: string

    title: string

    count?: number

    oProductSelect: IProductPedido[]
}

export interface ITipoPedidoOption {
    id: string
    nombre: string
}

export interface IUserSession {
    id: string
    nombres: string

    apellidos: string

    correo: string

    oPuntoVenta: IPuntoVenta

    oPuntosVenta: IPuntoVenta[]
}

export interface IPuntoVenta {
    id: string
    nombre: string
}

export interface IProductPedido {
    nombre: string
    cantidad: number
    idProducto: string

    idProductoPuntoVenta: string

    categoria: string
}
