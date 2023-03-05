import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:"tipos_transacciones"
})
export class TipoTransaccionEntity {

    @PrimaryGeneratedColumn("uuid", {
		name: "tipo_transaccion_id"
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
		name: "descripcion",
		nullable: false
	})
	descripcion: string;

    @CreateDateColumn({
		name: "fecha_creacion"
	})
	fechaCreacion: Date;

	@UpdateDateColumn({
		name: "fecha_modificacion"
	})
	fechaActualizacion: Date;

;

}





