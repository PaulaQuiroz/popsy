import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "productos"
})
export class ProductoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "producto_id"
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

	@Column({
		type: "varchar",
		length: 255,
		name: "presentacion",
		nullable: false
	})
	presentacion: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "minima_unidad",
		nullable: false
	})
	minimaUnidad: string;

	@Column({
		type: "integer",
		nullable: true,
		name: "estadopedidoi"
	})
	estadopedidoi: number;

	

	@Column({
		type: "integer",
		nullable: true,
		name: "estadopedidop"
	})
	estadopedidop: number;

	@Column({
		type: "varchar",
		length: 255,
		name: "categoria_producto",
		nullable: false
	})
	categoriaProducto: string;

	

	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;


}
