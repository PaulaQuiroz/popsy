import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "tipo_pedido"
})

export class TipoPedidoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "tipo_pedido_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "nombre",
		nullable: false
	})
	nombre: string;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;



}


