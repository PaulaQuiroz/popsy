import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "usuarios"
})
export class UsuarioEntity {

	@PrimaryGeneratedColumn("uuid", {
		name: "usuario_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "nombres",
		nullable: false
	})
	nombres: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "apellidos",
		nullable: false
	})
	apellidos: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "correo",
		nullable: false,
		unique: true
	})
	correo: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "password",
		nullable: false
	})
	password: string;

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
