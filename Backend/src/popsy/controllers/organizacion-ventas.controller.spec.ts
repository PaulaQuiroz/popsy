import { Test, TestingModule } from "@nestjs/testing";
import { OrganizacionVentaController } from "./organizacion-venta.controller";

describe("OrganizacionVentasController", () => {
	let controller: OrganizacionVentaController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrganizacionVentaController]
		}).compile();

		controller = module.get<OrganizacionVentaController>(OrganizacionVentaController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
