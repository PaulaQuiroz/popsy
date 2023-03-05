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
import { PedidoEntity } from "./pedido.entity";
import { ProductoFactorConversionEntity } from "./producto-factor-conversion.entity";
import { ProductoEntity } from "./producto.entity";

@Entity({
	name: "productos_pedidos"
})
export class ProductoPedidoEntity {
	@PrimaryGeneratedColumn("uuid", {
		name: "producto_pedido_id"
	})
	id: string;

	@Column({
		type: "integer",
		nullable: false,
		name: "cantidad"
	})
	cantidad: number;

	@ManyToOne(() => ProductoEntity, (oProducto) => oProducto, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "producto_id"
	})
	producto: ProductoEntity;

	@ManyToOne(() => PedidoEntity, (oPedido) => oPedido, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "pedido_id"
	})
	pedido: PedidoEntity;

	@ManyToOne(() => ProductoFactorConversionEntity, (oProductoFactorConversion) => oProductoFactorConversion, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "producto_factor_conversion_id"
	})
	productoFactorConversion: ProductoFactorConversionEntity;


	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;

	
}
