import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { OrganizacionVentaEntity } from "./organizacion-venta.entity";

@Entity({
	name: "distritos"
})
export class DistritoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "distrito_id"
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

	@ManyToOne(() => OrganizacionVentaEntity, (oOrganizacionVenta) => oOrganizacionVenta, {
		nullable: false,
		eager: true
	})
	@JoinColumn({
		name: "organizacion_venta_id"
	})
	organizacionVenta: OrganizacionVentaEntity;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}

