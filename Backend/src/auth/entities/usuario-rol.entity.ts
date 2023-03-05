import {
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { RolEntity } from "./rol.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity({
	name: "usuarios_roles"
})
export class UsuarioRolEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "usuario_rol_id"
	})
	id: string;

	@ManyToOne(() => UsuarioEntity, (oUsuario) => oUsuario, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "usuario_id"
	})
	usuario: UsuarioEntity;

	@ManyToOne(() => RolEntity, (oRol: RolEntity) => oRol, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "rol_id"
	})
	rol: RolEntity;

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
