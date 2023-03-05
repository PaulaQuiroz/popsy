import { DataSource } from "typeorm";
import { PermisoEntity } from "../entities/permiso.entity";
import { RolPermisoEntity } from "../entities/rol-permiso.entity";
import { RolEntity } from "../entities/rol.entity";
import { UsuarioRolEntity } from "../entities/usuario-rol.entity";
import { UsuarioEntity } from "../entities/usuario.entity";

export const AuthProvider = [
	{
		provide: "USUARIO_REPOSITORY",
		useFactory: (datasource: DataSource) => datasource.getRepository(UsuarioEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "ROL_PERMISO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(RolPermisoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "PERMISO_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(PermisoEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "USUARIO_ROL_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioRolEntity),
		inject: ["DATA_SOURCE"]
	},
	{
		provide: "ROL_REPOSITORY",
		useFactory: (dataSource: DataSource) => dataSource.getRepository(RolEntity),
		inject: ["DATA_SOURCE"]
	}
];
