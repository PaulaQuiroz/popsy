import { Test, TestingModule } from "@nestjs/testing";
import { OrganizacionVentaService } from "./organizacion-venta.service";

describe("OrganizacionVentaService", () => {
	let service: OrganizacionVentaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [OrganizacionVentaService]
		}).compile();

		service = module.get<OrganizacionVentaService>(OrganizacionVentaService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
