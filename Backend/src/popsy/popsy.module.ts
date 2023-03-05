import { Module } from "@nestjs/common";
import { PedidoService } from "./services/pedido.service";
import { PopsyProvider } from "./providers/popsy.provider";
import { DatabaseModule } from "../database/database.module";
import { EstadoPedidoService } from "./services/estado-pedido.service";
import { TipoPedidoService } from "./services/tipo-pedido.service";
import { PuntoVentaService } from "./services/punto-venta.service";
import { AuthModule } from "../auth/auth.module";
import { ProductoService } from "./services/producto.service";
import { ProductoController } from "./controllers/producto.controller";
import { OrganizacionVentaService } from "./services/organizacion-venta.service";
import { DistritoService } from "./services/distrito.service";
import { FactorConversionService } from "./services/factor-conversion.service";
import { UsuarioPuntoVentaService } from "./services/usuario-punto-venta.service";
import { ProductoPuntoVentaService } from "./services/producto-punto-venta.service";
import { ProductoPedidoService } from "./services/producto-pedido.service";
import { DistritoController } from "./controllers/distrito.controller";
import { EstadoPedidoController } from "./controllers/estado-pedido.controller";
import { FactorConversionController } from "./controllers/factor-conversion.controller";
import { OrganizacionVentaController } from "./controllers/organizacion-venta.controller";
import { PedidoController } from "./controllers/pedido.controller";
import { ProductoPedidoController } from './controllers/producto-pedido.controller';
import { ProductoPuntoVentaController } from './controllers/producto-punto-venta.controller';
import { PuntoVentaController } from './controllers/punto-venta.controller';
import { TipoPedidoController } from './controllers/tipo-pedido.controller';
import { UsuarioPuntoVentaController } from './controllers/usuario-punto-venta.controller';
import { TransaccionController } from './controllers/transaccion.controller';
import { TransaccionService } from './services/transaccion.service';
import { TipoTransaccionService } from './services/tipo-transaccion.service';
import { TipoTransaccionController } from './controllers/tipo-transaccion.controller';
import { ErrorTransaccionService } from './services/error-transaccion.service';
import { ErrorTransaccionController } from './controllers/error-transaccion.controller';
import { ProductoFactorConversionService } from './services/producto-factor-conversion.service';
import { ProductoFactorConversionController } from './controllers/producto-factor-conversion.controller';

@Module({
	imports: [
		DatabaseModule,
		AuthModule
	],
	providers: [
		...PopsyProvider,
		PedidoService,
		EstadoPedidoService,
		TipoPedidoService,
		PuntoVentaService,
		ProductoService,
		ProductoPedidoService,
		ProductoPuntoVentaService,
		UsuarioPuntoVentaService,
		FactorConversionService,
		DistritoService,
		OrganizacionVentaService,
		TransaccionService,
		TipoTransaccionService,
		ErrorTransaccionService,
		ProductoFactorConversionService
	],
	controllers: [ProductoController, DistritoController, EstadoPedidoController, FactorConversionController, OrganizacionVentaController, PedidoController, ProductoPedidoController, ProductoPuntoVentaController, PuntoVentaController, TipoPedidoController, UsuarioPuntoVentaController, TransaccionController, TipoTransaccionController, ErrorTransaccionController, ProductoFactorConversionController]
})
export class PopsyModule {
}
