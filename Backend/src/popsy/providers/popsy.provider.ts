import { DataSource } from "typeorm";
import { PedidoEntity } from "../entities/pedido.entity";
import { PuntoVentaEntity } from "../entities/punto-venta.entity";
import { TipoPedidoEntity } from "../entities/tipo-pedido.entity";
import { EstadoPedidoEntity } from "../entities/estado-pedido.entity";
import { ProductoEntity } from "../entities/producto.entity";
import { ProductoPedidoEntity } from "../entities/producto-pedido.entity";
import { ProductoPuntoVentaEntity } from "../entities/producto-punto-venta.entity";
import { UsuarioPuntoVentaEntity } from "../entities/usuario-punto-venta.entity";
import { FactorConversionEntity } from "../entities/factor-conversion.entity";
import { DistritoEntity } from "../entities/distrito.entity";
import { OrganizacionVentaEntity } from "../entities/organizacion-venta.entity";
import { TipoTransaccionEntity } from "../entities/tipo-transaccion.entity";
import { TransaccionEntity } from "../entities/transaccion.entity";
import { ErrorTransaccionEntity } from "../entities/error-transaccion.entity";
import { ProductoFactorConversionEntity } from "../entities/producto-factor-conversion.entity";

export const PopsyProvider = [
	{
		provide: "PEDIDO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(PedidoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PUNTO_VENTA_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(PuntoVentaEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "TIPO_PEDIDO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(TipoPedidoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "ESTADO_PEDIDO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(EstadoPedidoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PRODUCTO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PRODUCTO_PEDIDO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductoPedidoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PRODUCTO_PUNTO_VENTA_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductoPuntoVentaEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "USUARIO_PUNTO_VENTA_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioPuntoVentaEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "FACTOR_CONVERSION_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(FactorConversionEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "DISTRITO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(DistritoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "ORGANIZACION_VENTA_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(OrganizacionVentaEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "TIPO_TRANSACCION_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(TipoTransaccionEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "TRANSACCION_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(TransaccionEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "ERROR_TRANSACCION_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(ErrorTransaccionEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PRODUCTO_FACTOR_CONVERSION_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductoFactorConversionEntity),
		inject: ["DATA_SOURCE"]
	}
];
