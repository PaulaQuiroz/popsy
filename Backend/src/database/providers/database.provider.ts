import { DataSource } from "typeorm";
import { UsuarioEntity } from "../../auth/entities/usuario.entity";
import { PuntoVentaEntity } from "../../popsy/entities/punto-venta.entity";
import { EstadoPedidoEntity } from "src/popsy/entities/estado-pedido.entity";
import { RolPermisoEntity } from "src/auth/entities/rol-permiso.entity";
import { RolEntity } from "src/auth/entities/rol.entity";
import { UsuarioRolEntity } from "src/auth/entities/usuario-rol.entity";
import { PermisoEntity } from "src/auth/entities/permiso.entity";
import { PedidoEntity } from "src/popsy/entities/pedido.entity";
import { ProductoPedidoEntity } from "src/popsy/entities/producto-pedido.entity";
import { ProductoEntity } from "src/popsy/entities/producto.entity";
import { FactorConversionEntity } from "src/popsy/entities/factor-conversion.entity";
import { UsuarioPuntoVentaEntity } from "src/popsy/entities/usuario-punto-venta.entity";
import { TipoPedidoEntity } from "src/popsy/entities/tipo-pedido.entity";
import { ProductoPuntoVentaEntity } from "src/popsy/entities/producto-punto-venta.entity";
import { OrganizacionVentaEntity } from "src/popsy/entities/organizacion-venta.entity";
import { DistritoEntity } from "src/popsy/entities/distrito.entity";
import * as process from "process";
import { TransaccionEntity } from "src/popsy/entities/transaccion.entity";
import { ErrorTransaccionEntity } from "src/popsy/entities/error-transaccion.entity";
import { TipoTransaccionEntity } from "src/popsy/entities/tipo-transaccion.entity";
import { ProductoFactorConversionEntity } from "src/popsy/entities/producto-factor-conversion.entity";

export const DatabaseProvider = [
	{
		provide: "DATA_SOURCE",
		useFactory: async () => {
			const datasource = new DataSource({
				type: "mssql",
				host: "192.168.2.150",
				username: "desarrollador",
				password: "Popsy*7542",
				database: "BDSIPDV",
				
				extra: {
					trustServerCertificate: true,
				},
				synchronize: process.env.API_ENV !== "prd",
				entities: [
					UsuarioEntity,
					PuntoVentaEntity,
					EstadoPedidoEntity,
					RolPermisoEntity,
					RolEntity,
					UsuarioRolEntity,
					PermisoEntity,
					PedidoEntity,
					ProductoPedidoEntity,
					ProductoEntity,
					FactorConversionEntity,
					UsuarioPuntoVentaEntity,
					TipoPedidoEntity,
					ProductoPuntoVentaEntity,
					OrganizacionVentaEntity,
					DistritoEntity,
					TransaccionEntity,
					ErrorTransaccionEntity,
					TipoTransaccionEntity,
					ProductoFactorConversionEntity
				]
			});

			return datasource.initialize();
		}
	}
];
