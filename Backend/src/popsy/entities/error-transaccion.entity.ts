import { UsuarioEntity } from "src/auth/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoTransaccionEntity } from "./tipo-transaccion.entity";
import { TransaccionEntity } from "./transaccion.entity";

@Entity({
    name:"errores_transacciones"
})

export class ErrorTransaccionEntity {
    @PrimaryGeneratedColumn("uuid", {
		name: "error_transaccion_id"
	})
	id: string;


    @ManyToOne(() => TransaccionEntity, (otransaccion) => otransaccion, {
		eager: true,
		nullable: false
	})
	@JoinColumn({
		name: "transaccion_id"
	})
	transaccion: TransaccionEntity;

	@Column({
		type: "varchar",
		length: 255,
		name: "datos_enviados",
		nullable: false
	})
	datosEnviados: string;

	@Column({
		type: "varchar",
		length: 255,
		name: "datos_recibidos",
		nullable: false
	})
	datosRecibidos: string;

}



