import { Test, TestingModule } from "@nestjs/testing";
import { ProductoPuntoVentaService } from "./producto-punto-venta.service";

describe("ProductoPuntoVentaService", () => {
	let service: ProductoPuntoVentaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ProductoPuntoVentaService]
		}).compile();

		service = module.get<ProductoPuntoVentaService>(ProductoPuntoVentaService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
