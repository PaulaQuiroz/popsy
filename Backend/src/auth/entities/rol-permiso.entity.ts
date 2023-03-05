import {
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { PermisoEntity } from "./permiso.entity";
import { RolEntity } from "./rol.entity";

@Entity({
	name: "roles_permisos"
})

export class RolPermisoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "rol_permiso_id"
	})
	id: string;

	@ManyToOne(() => RolEntity, (oRol: RolEntity) => oRol, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "rol_id"
	})
	rol: RolEntity;

	@ManyToOne(() => PermisoEntity, (oPermiso: PermisoEntity) => oPermiso, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "permiso_id"
	})
	permiso: PermisoEntity;

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
