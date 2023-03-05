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
import { ProductoEntity } from "./producto.entity";

@Entity({
	name: "factores_conversion"
})

export class FactorConversionEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "factor_conversion_id"
	})
	id: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "unidad_base",
		nullable: false
	})
	unidadBase: string;

	@Column({
		type: "integer",
		name: "contador",
		nullable: false
	})
	contador: number;

	@Column({
		type: "varchar",
		length: 255,
		name: "unidad_medida_alter",
		nullable: false
	})
	unidadMedidaAlter: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "codigo_fc_sap",
		nullable: false
	})
	codigoFcSap: string;

	
	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}
