import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { FactorConversionEntity } from "./factor-conversion.entity";
import { ProductoEntity } from "./producto.entity";

@Entity({
    name:"productos_factores_conversion"
})
export class ProductoFactorConversionEntity {
    @PrimaryGeneratedColumn("uuid", {
		name: "producto_factor_conversion_id"
	})
	id: string;
    

	@ManyToOne(() => ProductoEntity, (oProducto) => oProducto, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "producto_id"
	})
	producto: ProductoEntity;


	@ManyToOne(() =>FactorConversionEntity, (oFactorConversion) => oFactorConversion, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "factor_conversion_id"
	})
	factorConversion: FactorConversionEntity;




	@CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;


	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;

}
