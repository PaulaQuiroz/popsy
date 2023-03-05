import { UsuarioEntity } from "src/auth/entities/usuario.entity";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { EstadoPedidoEntity } from "./estado-pedido.entity";
import { PuntoVentaEntity } from "./punto-venta.entity";
import { TipoPedidoEntity } from "./tipo-pedido.entity";

@Entity({
	name: "pedidos"
})

export class PedidoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "pedido_id"
	})
	id: string;

	@ManyToOne(() => PuntoVentaEntity, (oPuntoVenta) => oPuntoVenta, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "punto_venta_id"
	})
	puntoVenta: PuntoVentaEntity;

	@ManyToOne(() => TipoPedidoEntity, (oTipoPedido) => oTipoPedido, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "tipo_pedido_id"
	})
	tipoPedido: TipoPedidoEntity;

	@ManyToOne(() => EstadoPedidoEntity, (oEstadoPedido) => oEstadoPedido, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "estado_pedido_id"
	})
	estadoPedido: EstadoPedidoEntity;

	@ManyToOne(() => UsuarioEntity, (oUsuario) => oUsuario, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "usuario_id"
	})
	usuario: UsuarioEntity;



	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;

}
