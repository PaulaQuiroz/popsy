import { UsuarioEntity } from "src/auth/entities/usuario.entity";
import {
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { PuntoVentaEntity } from "./punto-venta.entity";

@Entity({
	name: "usuarios_puntos_ventas"
})

export class UsuarioPuntoVentaEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "usuario_punto_venta_id"
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

	@ManyToOne(() => PuntoVentaEntity, (oPuntoVenta) => oPuntoVenta, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "punto_venta_id"
	})
	puntoVenta: PuntoVentaEntity;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}
