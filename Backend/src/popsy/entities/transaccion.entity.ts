import { UsuarioEntity } from "src/auth/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PedidoEntity } from "./pedido.entity";
import { PuntoVentaEntity } from "./punto-venta.entity";
import { TipoTransaccionEntity } from "./tipo-transaccion.entity";

@Entity({
    name:"Transacciones"
})

export class TransaccionEntity {
    @PrimaryGeneratedColumn("uuid", {
		name: "transaccion_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "es_error",
		nullable: false
	})
	esError: string;

    @ManyToOne(() => TipoTransaccionEntity, (otipoTransaccion) => otipoTransaccion, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "tipo_transaccion_id"
	})
	tipoTransaccion: UsuarioEntity;

	@ManyToOne(() => PedidoEntity, (oPedido) => oPedido, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "pedido_id"
	})
	pedido: PuntoVentaEntity;

	
	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;



}



