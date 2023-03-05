import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { DistritoEntity } from "./distrito.entity";

@Entity({
	name: "puntos_ventas"
})
export class PuntoVentaEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "punto_venta_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "codigo",
		nullable: false
	})
	codigo: string;

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
		name: "direccion",
		nullable: false
	})
	direccion: string;

	@ManyToOne(() => DistritoEntity, (oDistrito) => oDistrito, {
		nullable: false,
		eager: true
	})
	@JoinColumn({
		name: "distrito_id"
	})
	distrito: DistritoEntity;

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}
