import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "organizaciones_ventas"
})
export class OrganizacionVentaEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "organizacion_venta_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "nombre",
		nullable: false
	})
	nombre: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "codigo",
		nullable: false
	})
	codigo: string;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}
