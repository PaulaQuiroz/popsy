import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "roles"
})
export class RolEntity {

	@PrimaryGeneratedColumn("uuid", {
		name: "rol_id"
	})
	id: string;

	@Column({
		name: "nombre",
		type: "varchar",
		length: 255,
		nullable: false
	})
	nombre: string;

	@Column({
		name: "descripcion",
		type: "varchar",
		length: 255,
		nullable: false
	})
	descripcion: string;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaModificacion: Date;

	@DeleteDateColumn({
		name: "fecha_eliminacion"
	})
	fechaEliminacion: Date;

}
