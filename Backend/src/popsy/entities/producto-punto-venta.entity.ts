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
import { PuntoVentaEntity } from "./punto-venta.entity";


@Entity({
	name: "productos_puntos_venta"
})

export class ProductoPuntoVentaEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "producto_punto_venta_id"
	})
	id: string;

	@Column({
		type: "integer",
		name: "cantidad_producto_maxima",
		nullable: false
	})
	cantidadProductoMaxima: number;

	@Column({
		type: "integer",
		name: "stock_actual",
		nullable: false
	})
	stockActual: number;

	@Column({
		type: "integer",
		name: "stock_transito",
		nullable: false
	})
	stockTransito: number;

	@Column({
		type: "varchar",
		length: 255,
		name: "punto_distribucion",
		nullable: false
	})
	puntoDistribucion: string;

	@ManyToOne(() => ProductoEntity, (oProducto) => oProducto, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "producto_id"
	})
	producto: ProductoEntity;

	@ManyToOne(() => PuntoVentaEntity, (oPuntoVenta: PuntoVentaEntity) => oPuntoVenta, {
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
