import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "permisos"
})

export class PermisoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "permiso_id"
	})
	id: string;

	@Column({
		name: "codigo",
		type: "varchar",
		length: 255,
		nullable: false
	})
	codigo: string;

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
	fechaActualizacion: Date;

	@DeleteDateColumn({
		name: "fecha_eliminacion"
	})
	fechaEliminacion: Date;


}
