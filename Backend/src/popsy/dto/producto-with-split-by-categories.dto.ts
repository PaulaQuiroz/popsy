import { ProductoEntity } from "../entities/producto.entity";

export interface ProductoWithSplitByCategoriesDto {
	nombreCategoria: string,
	productos: ProductoEntity[]
}
